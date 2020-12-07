<template>
  <v-app>
    <!-- 通知 -->
    <notifications group="default" animation-type="velocity">
      <template slot="body" slot-scope="props">
        <v-alert
          :type="props.item.type"
          class="ma-3 mb-0"
          border="left"
        >
          <div class="d-flex align-center ml-3">
            <div class="body-2 mr-auto">{{ props.item.text }}</div>
          </div>
        </v-alert>
      </template>
    </notifications>
    <!-- アプリバー -->
    <v-app-bar
      v-if="true"
      app
      color="primary"
      dark
      dense
    >
      <!-- 内容 -->
      <h2>Arai Systems</h2>
      <v-spacer></v-spacer>

      <!-- タブ定義 -->
      <template v-slot:extension>
        <v-tabs align-with-title>
          <!-- タブ名 -->
          <v-tab key="tab-1" to="/">HOME</v-tab>
          <v-tab key="tab-2" to="/template">Template</v-tab>
          <v-tab key="tab-3" to="/about">ABOUT</v-tab>
          <!-- 表示内容 -->
          <v-tab-item id="/">
            <router-view v-if="activeTab === '/'" />
          </v-tab-item>
          <v-tab-item id="/about">
            <router-view v-if="activeTab === '/abount'" />
          </v-tab-item>
          <v-tab-item id="/template">
            <router-view v-if="activeTab === '/template'" />
          </v-tab-item>
        </v-tabs>
      </template>
    </v-app-bar>

    <!-- ルーティングコンテンツ -->
    <v-main>
      <router-view class="ma-5" />
    </v-main>
  </v-app>
</template>

<script>
import axios from '@/axios/index'
import Cookies from 'js-cookie'

export default {
  name: 'App',
  data: function () {
    return {
      activeTab: ''
    }
  },
  async mounted () {
    axios.interceptors.request.use(
      (config) => {
        config.headers.Authorization = 'Bearer ' + Cookies.get('token')
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )
  }
}
</script>

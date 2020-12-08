<template>
  <div>
    <v-dialog width="300" v-model="dialog">
      <v-card>
        <v-card-title>ダイアログ</v-card-title> <v-card-text>
          テンプレート
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text v-on:click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card class="ma-10">
        <h1>{{ apiData.ip }}</h1>
    </v-card>
    <v-card class="ma-10">
        {{ apiData }}
        <v-btn class="ma-10" color="red" v-on:click="this.testFunction">
          OPEN
        </v-btn>
    </v-card>
    <v-card class="ma-10">
        {{ usersData.users[1] }}
    </v-card>
  </div>
</template>

<script>
import axios from '@/axios/index'

export default {
  name: 'Template',
  data: function () {
    return {
      apiData: [],
      usersData: {},
      dialog: false
    }
  },
  mounted: async function () {
    axios
      .get('/users')
      .then((response) => (
        this.usersData = response.data
      ))
  },
  methods: {
    testFunction () {
      console.log('aaaa')
      this.dialog = true
    }
  }
}
</script>

import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import axios from '@/axios/index'
import Cookies from 'js-cookie'

import './mixins/utility'

import Notifications from 'vue-notification'
import velocity from 'velocity-animate'

Vue.config.productionTip = false
Vue.use(Notifications, { velocity })

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

const createApp = async () => {
  const token = Cookies.get('token')

  if (!token || token === 'undefined') {
    console.log('トークンないぞ')
    store.dispatch('updateAuthState', null)
    if (router.app._route.name === 'Login' && router.app._route.query.redirect) {
      router.push({ name: 'Login' })
    }
  } else {
    await axios
      .get('/',
        {
          headers: {
            Authorization: 'Bearer ' + token
          }
        }
      )
      .then(res => {
        store.dispatch('updateAuthState', { access_token: token })
        if (router.app._route.name === 'Login') {
          router.push(router.app._route.query.redirect || { name: 'Home' })
        } else if (router.app._route.name === 'Logout') {
          console.log('aaaa')
        }
      })
      .catch(() => {
        console.log('トークン確認でエラー')
        store.dispatch('updateAuthState', null)
      })
  }
}

createApp()

<template>
  <v-container fluid>
  </v-container>
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
      .get('https://ipinfo.io/json?token=24248f247e1965')
      .then((response) => (
        this.apiData = response.data
      ))
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

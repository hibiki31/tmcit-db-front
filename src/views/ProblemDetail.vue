<template>
  <v-container fluid>
    <h1>{{ questionTitle }}</h1>
    <body-1>{{ questionBody }}</body-1>
  </v-container>
</template>

<script>
import axios from '@/axios/index'

export default {
  name: 'Template',
  data: function () {
    return {
      questionId: 0,
      questionTitle: '',
      questionBody: '',
      classId: 0,
      questionDate: ''
    }
  },
  mounted: async function () {
    this.questionId = this.$route.params.id
    axios.get(`https://aray.hibiki.work/questions/${this.questionId}`).then((response) => (this.data = response.data))
  },
  methods: {
    testFunction () {
      console.log('aaaa')
      this.dialog = true
    }
  }
}
</script>

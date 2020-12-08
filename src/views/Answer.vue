<template>
    <v-data-table
      :headers="headers"
      :items="data"
      :items-per-page="10"
      class="elevation-1"
    >
    <template v-slot:[`item.question_title`]="{ item }" justify="right">
      <router-link :to="{ name: 'ProblemId', params: { id: item['question_id'] } }">
        {{ item.question_title }}
      </router-link>
    </template>
    </v-data-table>
</template>

<script>
import axios from '@/axios/index'
export default {
  data () {
    return {
      data: [],
      id: this.$route.params.id,
      headers: [
        { text: '答え', value: 'answers' }
      ]
    }
  },
  mounted: async function () {
    axios
      .get('/answers')
      .then((response) => (
        this.data = response.data
      ))
  }
}
</script>

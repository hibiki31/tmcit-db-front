<template>
    <v-data-table
      :headers="headers"
      :items="questionsData"
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
      apiData: [],
      questionsData: [],
      id: this.$route.params.id,
      headers: [
        { text: '問題', value: 'question_title' },
        { text: '日付', value: 'question_date' },
        { text: '問題番号', value: 'question_id' }
      ]
    }
  },
  mounted: async function () {
    axios
      .get('/questions')
      .then((response) => {
        const parseDate = x => x.split(/[^0-9]/, 3).reduce((a, b) => a + '/' + b)
        this.questionsData = response.data
        console.log(this.questionsData)
        for (var i = 0; i < this.questionsData.length; i++) {
          this.questionsData[i].question_date = parseDate(this.questionsData[i].question_date)
        }
      })
  }
}
</script>

<template>
  <v-card class="pa-10">
      {{questionsData}}
    <v-data-table
      :headers="headers"
      :items="problems"
      :items-per-page="10"
      class="elevation-1"
    >
     <!-- <template v-slot:item.name="{ item }">
     <v-btn :to="item.name">
       {{item.name}}
     </v-btn>
     </template> -->
     <template v-slot:item.ProblemA="{ item }">
     <v-btn :to="item.ProblemA">
       {{item.ProblemA}}
     </v-btn>
     </template>
     <template v-slot:item.ProblemB="{ item }">
     <v-btn :to="item.ProblemB">
       {{item.ProblemB}}
     </v-btn>
     </template>
     <template v-slot:item.ProblemC="{ item }">
     <v-btn :to="item.ProblemC">
       {{item.ProblemC}}
     </v-btn>
     </template>
     <template v-slot:item.ProblemD="{ item }">
     <v-btn :to="item.ProblemD">
       {{item.ProblemD}}
     </v-btn>
     </template>
     <template v-slot:item.ProblemE="{ item }">
     <v-btn :to="item.ProblemE">
       {{item.ProblemE}}
     </v-btn>
     </template>
    </v-data-table>
  </v-card>
</template>

<script>
import axios from '@/axios/index'
export default {
  data () {
    return {
      apiData: [],
      questiondata: {},
      id: this.$route.params.id,
      headers: [
        {
          text: 'Problems',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'A', value: 'ProblemA' },
        { text: 'B', value: 'ProblemB' },
        { text: 'C', value: 'ProblemC' },
        { text: 'D', value: 'ProblemD' },
        { text: 'E', value: 'ProblemE' }
      ],
      problems: [
        {
          name: { name: 'ProblemId', params: { id: 'problem' } },
          ProblemA: { name: 'ProblemId', params: { id: 'problem' } },
          ProblemB: { name: 'ProblemId', params: { id: 'problem' } },
          ProblemC: { name: 'ProblemId', params: { id: 'problem' } },
          ProblemD: { name: 'ProblemId', params: { id: 'problem' } },
          ProblemE: { name: 'ProblemId', params: { id: 'problem' } }
        }
      ]
    }
  },
  mounted: async function () {
    axios
      .get('/questions')
      .then((response) => (
        this.questionsData = response.data
      ))
  }
}
</script>

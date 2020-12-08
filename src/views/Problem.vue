<template>
  <v-card class="pa-10">
    {{id}}
    <v-data-table
      :headers="headers"
      :items="problems"
      :items-per-page="10"
      class="elevation-1"
    >
     <template v-slot:item.name="{ item }">
     <v-btn :to="item.name">
       {{item.name}}
     </v-btn>
     </template>
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
    <!-- <v-btn :to="{name: 'Submit'}" text>
        <v-icon>Submit</v-icon>
     </v-btn> -->
  </v-card>
</template>

<script>
export default {
  data () {
    return {
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
        },
        {
          name: '問題',
          ProblemA: { name: 'ProblemId', params: { id: 'problem' } },
          ProblemB: '問題記載',
          ProblemC: '問題記載',
          ProblemD: '問題記載',
          ProblemE: '問題記載'
        },
        {
          name: '問題',
          ProblemA: '問題記載',
          ProblemB: '問題記載',
          ProblemC: '問題記載',
          ProblemD: '問題記載',
          ProblemE: '問題記載'
        },
        {
          name: '問題',
          ProblemA: '問題記載',
          ProblemB: '問題記載',
          ProblemC: '問題記載',
          ProblemD: '問題記載',
          ProblemE: '問題記載'
        },
        {
          name: '問題',
          ProblemA: '問題記載',
          ProblemB: '問題記載',
          ProblemC: '問題記載',
          ProblemD: '問題記載',
          ProblemE: '問題記載'
        },
        {
          name: '問題',
          ProblemA: '問題記載',
          ProblemB: '問題記載',
          ProblemC: '問題記載',
          ProblemD: '問題記載',
          ProblemE: '問題記載'
        },
        {
          name: '問題',
          ProblemA: '問題記載',
          ProblemB: '問題記載',
          ProblemC: '問題記載',
          ProblemD: '問題記載',
          ProblemE: '問題記載'
        }
      ]
    }
  }
}
</script>

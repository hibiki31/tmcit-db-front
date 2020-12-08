<template>
  <v-card class="pa-10">
    {{id}}
    <!-- <h1> -->
      <!-- {{Input}} -->
<!--  -->
    <!-- </h1> -->
<!-- <v-text-field -->
      <!-- label="Main input" -->
      <!-- :rules="rules" -->
      <!-- hide-details="auto" -->
    <!-- ></v-text-field> -->
    <!-- <v-text-field v-model="Input" label="Another input"></v-text-field> -->
    <!-- <v-btn -->
      <!-- class="mx-2" -->
      <!-- fab -->
      <!-- dark -->
      <!-- small -->
      <!-- color="primary" -->
    <!-- > -->
       <!-- <v-icon dark> -->
        <!-- mdi-minus -->
      <!-- </v-icon> -->
    <!-- </v-btn> -->
    <v-data-table
      :headers="headers"
      :items="problems"
      :items-per-page="10"
      class="elevation-1"
    >
     <template v-slot:item.ProblemA="{ item }">
     <v-btn :to="item.ProblemA">
       {{item.ProblemA}}
     </v-btn>
     </template>
    </v-data-table>
    <v-btn :to="{name: 'Submit'}" text>
        <v-icon>Submit</v-icon>
     </v-btn>
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
      // Input: 'ああああ'
    }
  }
}
</script>

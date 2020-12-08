<template>
  <v-container fluid>
    <v-row>
      <v-text-field
            v-model="questionTitle"
            label="タイトル"
      ></v-text-field>
    </v-row>
    <v-textarea
      auto-grow
      v-model="questionBody"
      name="source-input"
      label="問題本文"
    >{{ questionBody }}</v-textarea>
    <v-btn v-on:click="submit">
      Submit
    </v-btn>
  </v-container>
</template>

<script>
import axios from '@/axios/index'

export default {
  data: () => ({
    questionTitle: '',
    questionBody: '',
    classId: 1
  }),
  methods: {
    submit () {
      axios.post('https://aray.hibiki.work/questions', {
        question_title: this.questionTitle,
        class_id: this.classId,
        question_body: this.questionBody
      },
      {
        headers: {
          'content-type': 'application/json'
        }
      })
    }
  }
}
</script>

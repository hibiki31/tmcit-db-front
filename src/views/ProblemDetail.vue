<template>
  <v-container fluid>
    <h1>{{ questionTitle }}</h1>
    <body-1>{{ questionBody }}</body-1>
    <v-textarea
      auto-grow
      v-model="source"
      name="source-input"
      label="ソースコードの提出"
      hint="Hint text"
      :value="file">{{ file }}</v-textarea>
  <v-file-input
   v-model="file"
   truncate-length="15"
   @change="fileinput"
  ></v-file-input>
    <v-btn v-on:click="submit">
      Submit
    </v-btn>
  </v-container>
</template>

<script>
import axios from '@/axios/index'

export default {
  name: 'Template',
  data: function () {
    return {
      questionId: 0,
      question: {
        title: '',
        body: ''
      },
      answer: {
        answer_type: 0
      },
      classId: 0,
      questionDate: '',
      file: null,
      source: ''
    }
  },
  mounted: async function () {
    this.questionId = this.$route.params.id
    axios.get(`/questions/${this.questionId}`).then((response) => (this.question = response.data))
  },
  methods: {
    fileinput () {
      console.log(this.file)
      if (!this.file) this.source = 'No File Data'
      else {
        const reader = new FileReader()
        reader.readAsText(this.file)
        reader.onload = () => {
          this.source = reader.result
        }
      }
    },
    submit () {
      this.questionId = this.$store.params.id
      axios.post(`/answers/${this.questionId}`, {
        answer_str: this.source,
        file_type: 0
      }).then((res) => {
        this.answer = res.data
        if (this.answer.answer_type === 0) {
          this.$_pushNotice('正解しました', 'success')
        } else {
          this.$_pushNotice('不正解です', 'error')
        }
      })
    }
  }
}
</script>

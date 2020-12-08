<template>
  <v-container fluid>
    <v-textarea
      auto-grow
      v-model="source"
      name="source-input"
      label="ソースコードの提出"
      hint="Hint text"
      :value="file"
    >{{ file }}</v-textarea>
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
  data: () => ({
    questionId: 0,
    file: null,
    source: ''
  }),
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
      axios.post(`https://aray.hibiki.work/answers/${this.questionId}`, {
        answer_str: this.source,
        file_type: 0
      }).then((res) => {
        console.log(res.status)
      })
    }
  }
}
</script>

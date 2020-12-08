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
  </v-container>
</template>

<script>
export default {
  data: () => ({
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
    }
  }
}
</script>

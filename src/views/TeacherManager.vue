<template>
  <v-container fluid>
    <v-row>
      <h5>クラス: </h5>
      <v-text-field
        v-model="className"
        label="クラス名"
      ></v-text-field>
      <v-btn v-on:click="submit">
        クラスを作成
      </v-btn>
    </v-row>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">
             ID
          </th>
          <th class="text-center">
            Name
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users.users"
          :key="user.id"
        >
          <td class="text-center">{{ user.user_id }}</td>
          <td class="text-center">{{ user.name }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-container>
</template>

<script>
import axios from '@/axios/index'

export default {
  data: () => ({
    classId: 1,
    className: '',
    users: []
  }),
  mounted: async function () {
    axios.get('http://aray.hibiki.work/users').then((response) => (this.users = response.data))
    console.log(this.users)
  },
  methods: {
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

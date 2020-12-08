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
          <th class="text-center">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in joinUsers.users"
          :key="user.id"
        >
          <td class="text-center">{{ user.user_id }}</td>
          <td class="text-center">{{ user.user_name }}</td>
          <td class="text-center">
            <v-btn small color="primary" v-on:click="submit">
              Delete
            </v-btn>
          </td>
        </tr>
        <tr
          v-for="user in others"
          :key="user.user_id"
        >
          <td class="text-center">{{ user.user_id }}</td>
          <td class="text-center">{{ user.name }}</td>
          <td class="text-center">
            <v-btn small color="error" v-on:click="submit">
              Add
            </v-btn>
          </td>
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
    joinUsers: [],
    others: []
  }),
  mounted: async function () {
    this.joinUsers = (await axios.get('http://aray.hibiki.work/classes/', { params: { class_id: this.classId } })).data
    const tmp = (await axios.get('http://aray.hibiki.work/users')).data
    var tmptmp = []
    for (let i = 0; i < tmp.users.length; ++i) {
      let exists = false
      for (let j = 0; j < this.joinUsers.users.length; ++j) {
        if (tmp.users[i].user_id === this.joinUsers.users[j].user_id) {
          exists = true
          break
        }
      }
      if (exists === false) {
        tmptmp.push(tmp.users[i])
      }
    }
    this.others = tmptmp
  },
  methods: {
    submit () {
    }
  }
}
</script>

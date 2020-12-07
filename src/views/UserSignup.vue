<template>
  <div class="UserSignup">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card v-if="$route.query.redirect && !$_userData.isLoaded" flat>
            <v-card-text class="text-center">
              <div class="body-1 mb-3">Now loading...</div>
              <v-progress-circular indeterminate color="primary" />
            </v-card-text>
          </v-card>
          <v-card v-else class="elevation-12">
            <v-toolbar color="primary" dark>
              <v-toolbar-title>UserSignup</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-form ref="form" v-model="isFormValid">
              <v-card-text>
                <v-text-field
                  v-model="formData.name"
                  :rules="[rules.required]"
                  label="name"
                  name="name"
                  prepend-icon="mdi-account"
                  required
                  type="text"
                ></v-text-field>

                <v-text-field
                  v-model="formData.password"
                  :rules="[rules.required]"
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  required
                  type="password"
                ></v-text-field>

                <input type="checkbox" id="checkbox" v-model="formData.is_teacher">
                <label for="checkbox">is_teacher</label>

              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  @click.prevent="doUserSignup"
                  :disabled="!isFormValid"
                  :loading="isLoadingUserSignup"
                  depressed
                  color="primary"
                  type="submit"
                  v-on:click="this.doUserSignup"
                  >Signup</v-btn
                >
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.UserSignup {
  > * {
    margin: auto;
  }
}
</style>

<script>
import axios from '@/axios/index'

export default {
  name: 'UserSignup',
  data: () => ({
    isFormValid: false,
    formData: {
      name: '',
      password: '',
      is_teacher: false
    },
    rules: {
      required: (v) => !!v?.length
    }
  }),
  methods: {
    async doUserSignup () {
      this.params = {
        name: this.formData.name,
        password: this.formData.password,
        is_teacher: this.formData.is_teacher
      }
      await axios.post('http://aray.hibiki.work/users', this.params, {
        headers: {
          accept: 'application/json',
          'content-type': 'application/json'
        }
      }).then((response) => {
        this.apiData = response.data
      })
    }
  }
}
</script>

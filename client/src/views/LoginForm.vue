<template>
  <v-container>
    <v-form v-model="valid">
      <v-container>
        <br><br><br>
        <v-row justify="center">
          <h2>BioLink - Account Login</h2>
        </v-row>

        <v-row justify="center">
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="password"
              type="password"
              label="Password"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-btn
            color="success"
            class="mr-4"
            @click="loginAccount"
            >
            Login
          </v-btn>
        </v-row>
        <br>
        <p align="center">Don't have an account? Sign up for free <a href="google.com">here</a></p>

      </v-container>
    </v-form>
  </v-container>
</template>

<script>

  import axios from 'axios'

  export default {
    name: 'LoginForm',

    data: () => ({
     email: "",
     password: "",
    }),
    props: ['url'],
    methods: {
      loginAccount() {
        let obj = {
          email: this.email,
          password: this.password
        }
        axios.post(`${this.url}/users/signin`, obj)
          .then(function(response) {
            localStorage.setItem('token', response.headers['x-auth-token'])
            localStorage.setItem('id', response.data.id)
            localStorage.setItem('username', response.data.username)
            this.$router.push('/dashboard')
          })
          .catch(function(error) {
            console.log(error.message)
          })
      }
    },
    created() {
      if(localStorage.getItem('id') !== undefined &&
         localStorage.getItem('username') !== undefined &&
         localStorage.getItem('token') !== undefined) {
           this.$router.push('/dashboard')
         }
    }
  }
</script>

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
        <p align="center">Don't have an account? Sign up for free <router-link :to="{ path: 'signup' }">here</router-link></p>

      </v-container>
    </v-form>
  </v-container>
</template>

<script>

  import axios from 'axios'
  import Swal from 'sweetalert2'

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
          .then((response) => {
            localStorage.setItem('token', response.headers['x-auth-token'])
            localStorage.setItem('id', response.data.id)
            localStorage.setItem('username', response.data.username)
            this.$router.push('/dashboard')
          })
          .catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops',
              text: error.message
            })
          })
      }
    },
    created() {
      if(localStorage.getItem('id') &&
         localStorage.getItem('username') &&
         localStorage.getItem('token')) {
         this.$router.push('/dashboard')
         }
    }
  }
</script>

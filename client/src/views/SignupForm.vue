<template>
  <v-container>
    <v-form v-model="valid">
      <v-container>
        <br><br><br>
        <v-row justify="center">
          <h2>BioLink - Account Sign Up</h2>
        </v-row>

        <v-row justify="center">
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="name"
              label="Name"
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
              v-model="username"
              label="Username"
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
            @click="createAccount"
            >
            Sign Up
          </v-btn>
        </v-row>
        <br>
        <p align="center">Already have an account? Sign in <router-link :to="{ path: '/' }">here</router-link></p>

      </v-container>
    </v-form>
  </v-container>
</template>

<script>

  import axios from 'axios'

  export default {
    name: 'SignupForm',

    data: () => ({
     name: "",
     username: "",
     email: "",
     password: "",
    }),
    props: ['url'],
    methods: {
      createAccount() {
        let obj = {
          name: this.name,
          username: this.username,
          email: this.email,
          password: this.password
        }
        axios.post(`${this.url}/users`, obj)
          .then(() => {
            this.$router.push('/')
          })
          .catch((error) => {
            console.log(error.message)
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

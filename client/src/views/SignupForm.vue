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
              :rules="nameRules"
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
              v-model="email"
              :rules="emailRules"
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
              :rules="passwordRules"
              label="Password"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-btn
            color="success"
            class="mr-4"
            >
            Sign Up
          </v-btn>
        </v-row>
        <br>
        <p align="center">Already have an account? Sign in <a href="google.com">here</a></p>

      </v-container>
    </v-form>
  </v-container>
</template>

<script>
  export default {
    name: 'LoginForm',

    data: () => ({
     
    }),
  }
</script>

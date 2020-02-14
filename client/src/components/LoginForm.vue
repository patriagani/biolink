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
            Login
          </v-btn>

          <v-btn
            color="primary"
            class="mr-4"
            >
            Sign Up
          </v-btn>
        </v-row>

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

<template>
  <div class="editprofile">
    <br>
    <h2 align="center">Biolink Add Link</h2>
    <br>
    <v-card
      class="mx-auto"
      max-width="1000"
    >
      <v-card-text>
        <h3>Here you can add link to your profile</h3>
        <br>
        <p>You have total 5 links on your BioLink profile:  @patriagani</p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
        >
          Dashboard
        </v-btn>
        <v-btn
          text
          color="deep-purple accent-4"
        >
          Visit Profile
        </v-btn>
        <v-btn
          text
          color="deep-purple accent-4"
        >
          Update Profile
        </v-btn>
        <v-btn
          text
          color="deep-purple accent-4"
        >
          Sign Out
        </v-btn>
      </v-card-actions>
    </v-card>
    <br><br>
    <v-card
      class="mx-auto"
      max-width="1000"
    >
      <v-card-text>
        <h3 align="center">Add link using this form below: </h3>
      </v-card-text>
       <v-form v-model="valid">
        <v-row justify="center">
          <v-col
            cols="12"
            md="8"
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
            md="8"
          >
            <v-text-field
              v-model="link"
              :rules="linkRules"
              label="Link"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-btn
            color="primary"
            class="mr-4"
            >
            Add Link
          </v-btn>
        </v-row>
      </v-form>
      <v-card-actions>
      </v-card-actions>
    </v-card>

  </div>
</template>

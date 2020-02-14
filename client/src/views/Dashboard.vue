<template>
  <div class="dashboard">
    <br>
    <h2 align="center">Biolink Dashboard</h2>
    <br>
    <v-card
      class="mx-auto"
      max-width="1000"
    >
      <v-card-text>
        <h3>Hi, Welcome Back Patria</h3>
        <br>
        <p>You have total 5 links on your BioLink profile:  @patriagani</p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
        >
          Add Link
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
        <h3 align="left">Your available links on your profile: </h3>
        <br>
      </v-card-text>
      
      <div>
        <v-card
          class="mx-auto"
          max-width="800"
        >
          <v-card-text>
            <h4>Twitter : </h4>
            <p>https://twitter.com/patriagani</p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="deep-purple accent-4"
            >
              Edit Link
            </v-btn>
            <v-btn
              text
              color="deep-purple accent-4"
            >
              Delete Link
            </v-btn>
          </v-card-actions>
        </v-card>
        <br>
      </div>

      

    </v-card>

  </div>
</template>

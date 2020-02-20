<template>
  <div class="editprofile">
    <br>
    <h2 align="center">Biolink Edit Profile</h2>
    <br>
    <v-card
      class="mx-auto"
      max-width="1000"
    >
      <v-card-text>
        <h3>Here you can edit your BioLink profile</h3>
        <br>
        <p>You have total {{links.length}} links on your BioLink profile:  @{{user.username}}</p>
        <p>Visit your BioLink profile:  <a :href="`https://biolink.my.id/${user.username}`">biolink.my.id/{{user.username}}</a></p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
          @click="()=>{this.$router.push('/dashboard')}"
        >
          Dashboard
        </v-btn>
        <v-btn
          text
          color="deep-purple accent-4"
          @click="()=>{this.$router.push('/addlink')}"
        >
          Add Link
        </v-btn>
        <v-btn
          text
          color="deep-purple accent-4"
          @click="signOut"
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
        <h3 align="center">Edit profile using this form below: </h3>
      </v-card-text>
      <br>
      <v-row justify="center">
        <v-avatar size="150">
          <img :src="user.imageUrl" :alt="user.username">
        </v-avatar>
      </v-row>
      <br>
      <v-row justify="center">
        <p>Profile Picture</p>
      </v-row>
      <v-row justify="center">
        <input type="file" ref="file" v-on:change="handleFileUpload()">
      </v-row>
      <v-form v-model="valid">
        <v-row justify="center">
          <v-col
            cols="12"
            md="8"
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
            md="8"
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
            md="8"
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
            color="primary"
            class="mr-4"
            @click="saveProfile"
            >
            Save Profile
          </v-btn>

          <v-btn
            color="secondary"
            class="mr-4"
            @click="cancel"
            >
            Cancel
          </v-btn>
        </v-row>
      </v-form>
      <br>
      <v-card-actions>
      </v-card-actions>
    </v-card>
    <br><br>
  </div>
</template>

<script>

  import axios from 'axios'
  import Swal from 'sweetalert2'

  export default {
    name: 'EditProfile',

    data: () => {
      return {
        user: {}, 
        links: [],
        name: "",
        email: "",
        password: ""
      }
    },
    props: ['url'],
    methods: {
      getLinks() {
        axios.get(`${this.url}/links/createdby/${localStorage.getItem('username')}`)
          .then((response) => {
            this.links = response.data
          })
          .catch(function(error) {
            console.log(error.message)
          })
      },
      getUser() {
        axios.get(`${this.url}/users/${localStorage.getItem('id')}`)
          .then((response) => {
            this.user = response.data
            this.name = response.data.name
            this.email = response.data.email
          })
          .catch(function(error) {
            console.log(error.message)
          })
      },
      handleFileUpload() {
        this.file = this.$refs.file.files[0]
      },
      saveProfile() {

        let formData = new FormData();
        if(this.file) {
          formData.append('imageUrl', this.file);
        }
        if(this.password) {
          formData.append('password', this.password);
        }
        formData.append('name', this.name);
        formData.append('email', this.email);

        axios.patch(`${this.url}/users/${localStorage.getItem('id')}`, formData, {headers: {'Content-Type': 'multipart/form-data', 'x-auth-token': localStorage.getItem('token')}})
        .then(() => {
          console.log('Success edit profile');
          this.file = ""
          this.password = ""
        })
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Yeaaay',
            text: 'Profile changed successfully'
          })
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: error.message
          })
        })
      },
      cancel() {
        this.$router.push('/dashboard')
      },
      signOut() {
        localStorage.clear()
        this.$router.push('/')
      }
    },
    created() {
      this.getLinks()
      this.getUser()
      
      if(!localStorage.getItem('id') &&
         !localStorage.getItem('username') &&
         !localStorage.getItem('token')) {
           this.$router.push('/')
         }
    }
  }
</script>
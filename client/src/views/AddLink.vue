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
          @click="()=>{this.$router.push('/editprofile')}"
        >
          Edit Profile
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
              label="Link URL"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-btn
            color="primary"
            class="mr-4"
            @click="addLink"
            >
            Add Link
          </v-btn>
        </v-row>
      </v-form>
      <v-card-actions>
      </v-card-actions>
      <br>
    </v-card>
    <br><br>
  </div>
</template>

<script>

  import axios from 'axios'
  import Swal from 'sweetalert2'

  export default {
    name: 'Dashboard',

    data: () => {
      return {
        user: {},
        name: "",
        link: "",
        links: [] 
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
          })
          .catch(function(error) {
            console.log(error.message)
          })
      },
      addLink() {
        let obj = {
          name: this.name,
          link: this.link
        }
        
        const options = {
          method: 'POST',
          headers: {'x-auth-token': localStorage.getItem('token')},
          baseURL: `${this.url}/links`,
          data: obj
        }

        axios(options)
          .then(() => {
            this.name = ""
            this.link = ""
            console.log('success add link')
          })
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Yeaaay',
              text: 'Link added successfully'
            })
          })
          .catch(function(error) {
            Swal.fire({
              icon: 'error',
              title: 'Oops',
              text: error.message
            })
          })
      },
      signOut() {
        localStorage.clear()
        this.$router.push('/')
      }
    },
    created() {
      this.getUser()
      this.getLinks()
      
      if(!localStorage.getItem('id') &&
         !localStorage.getItem('username') &&
         !localStorage.getItem('token')) {
           this.$router.push('/')
         }
    }
  }
</script>

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
        <h3>Hi, Welcome Back {{user.name}}</h3>
        <br>
        <p>You have total {{links.length}} links on your BioLink profile:  @{{user.username}}</p>
        <p>Visit your BioLink profile:  <a :href="`https://biolink.me/${user.username}`">biolink.me/{{user.username}}</a></p>
      </v-card-text>
      <v-card-actions>
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
        <h3 v-if="links.length > 0" align="left">Your available links on your profile: </h3>
        <h3 v-if="links.length == 0" align="left">Your don't have any links on your profile: </h3>
        <br>
        <h3 v-if="links.length == 0" align="left">Create at least one link <router-link :to="{ path: 'addlink' }">here</router-link></h3>
        <br>
      </v-card-text>
      
      <div v-for="link in links" v-bind:key="link">
        <v-card
          class="mx-auto"
          max-width="800"
        >
          <v-card-text>
            <h4>{{link.name}} : </h4>
            <p>{{link.link}}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="deep-purple accent-4"
              @click="editLink(link._id)"
            >
              Edit Link
            </v-btn>
            <v-btn
              text
              color="deep-purple accent-4"
              @click="deleteLink(link._id)"
            >
              Delete Link
            </v-btn>
          </v-card-actions>
        </v-card>
        <br>
      </div>
      <br>      
    </v-card>

    <br><br>
  </div>
</template>

<script>

  import axios from 'axios'

  export default {
    name: 'Dashboard',

    data: () => {
      return {
        user: {}, 
        links: [],
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
      deleteLink(id) {
        const options = {
          method: 'DELETE',
          headers: {'x-auth-token': localStorage.getItem('token')},
          baseURL: `${this.url}/links/${id}`,
        }

        axios(options)
          .then(() => {
            console.log('success delete link')
            this.getLinks()
          })
          .catch(function(error) {
            console.log(error.message, 'ini error')
          })
      },
      editLink(id) {
        this.$router.push(`/editlink/${id}`)
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

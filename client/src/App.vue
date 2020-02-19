<template>
  <v-app>
    <v-content>
      <router-view :url="url"></router-view>
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    url: 'https://radiant-shore-44957.herokuapp.com',
  }),
  methods: {
    //
  },
  mounted() {
    
  }
};
</script>

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
    url: 'http://localhost:3000',
  }),
  methods: {
    //
  },
  mounted() {
    
  }
};
</script>

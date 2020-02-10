<template>
  <div class="home">
    <v-content>
    <LoginForm/>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Home',
  components: {
    LoginForm
  }
}
</script>

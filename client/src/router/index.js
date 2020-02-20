import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginForm.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignupForm.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/editprofile',
    name: 'EditProfile',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditProfile.vue')
  },
  {
    path: '/addlink',
    name: 'AddLink',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddLink.vue')
  },
  {
    path: '/editlink/:linkId',
    name: 'EditLink',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditLink.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

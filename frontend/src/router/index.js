import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from "../views/Register.vue"
import LoginUser from "../views/LoginUser.vue"
import Galery from "../views/Galery.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home

  },
  {
    path: '/register',
    name: 'Register',
    component: Register

  },
  {
    path: '/galery',
    name: 'Galery',
    component: Galery

  },
  {
    path: '/login',
    name: 'LoginUser',
    component: LoginUser

  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

import Vue from 'vue'
import Vuex from 'vuex'
import snackbar from "./modules/snackbar"
import infoSession from "./modules/session"
import modal from "./modules/modal"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: localStorage.getItem('isLoggedIn') == 'true' ? true : false,
    token: localStorage.getItem('token') || null,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    session: infoSession,
    snackbar, modal
  }
})

<template>
  <v-app>
    <Navbar />
    <v-main> <router-view /><Snackbar /> </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navigation/navbar.vue";
import Snackbar from "./components/notifications/snackbar.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: { Navbar, Snackbar },
};
</script>

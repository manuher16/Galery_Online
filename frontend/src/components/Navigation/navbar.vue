<template>
  <v-app-bar v-resize="onResize">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-btn text href="/">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-btn>
    <v-row class="d-flex my-0 py-0" v-if="windowSize.x > 500 && !isLoggedIn">
      <v-col class="align-self-center text-end">
        <v-btn class="mx-1" href="/login">Longin</v-btn>
        <v-btn class="mx-1" href="/register">Register</v-btn>
      </v-col>
    </v-row>
    <v-spacer v-if="windowSize.x < 500 && !isLoggedIn"></v-spacer>
    <v-card
      flat
      height="100%"
      color="transparent"
      class="mx-0 px-0 my-0 py-0 align-self-end text-end"
      v-if="windowSize.x < 500 && !isLoggedIn"
    >
      <v-card-actions class="mx-0 px-0 my-0 py-0">
        <v-btn class="mx-1" icon href="/login">
          <v-icon>mdi-login</v-icon>
        </v-btn>
        <v-btn class="mx-1" href="/register" icon>
          <v-icon>mdi-account-multiple-plus</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-spacer v-if="windowSize.x > 500"></v-spacer>
    <v-card v-if="isLoggedIn && windowSize.x > 500" color="transparent" flat>
      <v-card-actions class="mx-0 px-0 my-0 py-0">
        <v-btn text href="/galery">Galeria</v-btn>
        <MenuProfile
          label="Perfil"
          :items="dropMenu.profile.items"
          color="black"
          icon="mdi-chevron-down"
        />
      </v-card-actions>
    </v-card>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";
import MenuProfile from "../menus/dropMenu.vue";
export default {
  data: () => ({
    drawer: false,
    title: "Navigation",
    dropMenu: {
      profile: {
        label: "Perfil",
        items: [
          {
            label: "Perfil",
            icon: "mdi-logout",
            action: "logout",
          },
          {
            label: "Configuracion",
            icon: "mdi-logout",
            action: "logout",
          },
          {
            label: "Cerrar sesion",
            icon: "mdi-logout",
            action: "logout",
          },
        ],
      },
    },
    windowSize: {
      x: 0,
      y: 0,
    },
  }),
  computed: {
    ...mapState("session", ["isLoggedIn"]),
  },
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    },
  },
  components: {
    MenuProfile,
  },
};
</script>

<style>
</style>
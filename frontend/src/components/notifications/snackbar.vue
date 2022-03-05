<template>
  <v-card text>
    <v-snackbar v-model="show" :color="color">
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="hide"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("snackbar", ["show", "message", "timeout", "color"]),
  },
  methods: {
    ...mapMutations("snackbar", ["hide"]),
  },
};
</script>

<style>
</style>
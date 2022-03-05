<template>
  <v-container fluid class="background-image-login">
    <v-sheet
      color="transparent"
      height="100vh"
      class="d-flex align-self-center aling-center justify-center"
    >
      <v-card width="400" class="aling-center justify-center" height="310">
        <v-card-title>Inicia sesion</v-card-title>
        <v-divider />
        <v-card-text>
          <v-form ref="form" class="" v-model="validForm">
            <v-text-field
              label="Email"
              required
              :rules="rules.email"
              v-model="form.email"
            ></v-text-field>
            <v-text-field
              label="Contrasena"
              required
              :rules="rules.password"
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
            >
              <template v-slot:append>
                <v-btn icon @click="showPassword = !showPassword">
                  <v-icon v-if="!showPassword">mdi-eye-off</v-icon>
                  <v-icon v-else>mdi-eye-outline</v-icon>
                </v-btn>
              </template>
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" class="mx-3" @click="onSubmit">Iniciar</v-btn>
          <v-spacer></v-spacer>
          <v-card-text> <a>Has olvidado tu contrasena?</a> </v-card-text>
        </v-card-actions>
      </v-card>
    </v-sheet>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  data: () => ({
    showPassword: false,
    validForm: false,
    form: {
      email: "",
      password: "",
    },
    rules: {
      email: [(v) => !!v || "El email es requerido"],
      password: [(v) => !!v || "La contrasena es requerida"],
    },
  }),

  methods: {
    ...mapMutations("session", ["setToken", "setIsLoggedIn"]),
    onSubmit() {
      this.validForm = this.$refs.form.validate();
      if (this.validForm) {
        axios
          .post(`${process.env.VUE_APP_ULR_API}/api/user/login`, this.form)
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            this.setToken(res.data.token);
            this.setIsLoggedIn(true);
            localStorage.setItem("isLoggedIn", true);
            this.$router.push("/");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style>
.background-image-login {
  background-image: url("https://i.blogs.es/38c60b/2/1366_2000.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: "100vh";
}
</style>
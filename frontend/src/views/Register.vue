<template>
  <v-container fluid>
    <v-row>
      <v-col md="8">
        <v-card flat class="my-5">
          <v-row>
            <v-col md="7">
              <v-img
                cover
                width="100%"
                src="https://image.freepik.com/vector-gratis/ilustracion-concepto-visor-imagenes_114360-4532.jpg"
              ></v-img>
            </v-col>
            <v-col>
              <v-card-subtitle class="text-h3"
                >Sube tus imagenes y compartelas con quien
                quieras</v-card-subtitle
              >
              <v-card-text>
                Guarda tus imagenes favoritas, compartelas con tus amigos y
                comparte con tus familiares. Haz tu albunes con tus momento
                favoritas.
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col class="d-flex aling-self-end justify-end" md="4">
        <v-card width="100%" height="550" outlined class="my-5">
          <v-card-title>Crea tu cuenta Ya!</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-form class="" lazy-validation ref="form" v-model="valid">
              <v-text-field
                label="Nombre"
                v-model="form.name"
                required
                :rules="rules.name"
              ></v-text-field>
              <v-text-field
                label="Email"
                v-model="form.email"
                required
                :rules="rules.email"
              ></v-text-field>
              <v-text-field
                label="Contraseña"
                required
                :rules="rules.password"
                v-model="form.password"
                :type="!showPasswords.one ? 'password' : ''"
              >
                <template v-slot:append>
                  <v-btn icon @click="showPasswords.one = !showPasswords.one">
                    <v-icon v-if="!showPasswords.one">mdi-eye-off</v-icon>
                    <v-icon v-else>mdi-eye-outline</v-icon>
                  </v-btn>
                </template>
              </v-text-field>
              <v-text-field
                :type="!showPasswords.two ? 'password' : ''"
                required
                :rules="rules.password"
                label="Confirmar contraseña"
                v-model="form.password_confirmation"
              >
                <template v-slot:append>
                  <v-btn icon @click="showPasswords.two = !showPasswords.two">
                    <v-icon v-if="!showPasswords.two">mdi-eye-off</v-icon>
                    <v-icon v-else>mdi-eye-outline</v-icon>
                  </v-btn>
                </template></v-text-field
              >
              <v-checkbox
                v-model="form.checkbox"
                label="Acepto los terminos y condiciones"
              ></v-checkbox>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" class="mx-3" @click="onSubmit">Crear</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
const regexEmail = new RegExp("([a-z0-9.!]{1,})@([a-z]{1,}).([a-z]{2,})", "g");
export default {
  data: () => ({
    valid: false,
    showPasswords: {
      one: false,
      two: false,
    },
    rules: {
      name: [
        (v) => !!v || "El nombre es requerido",
        (v) => v.length > 3 || "Ingrese un nombre valido",
        (v) => v.split(" ").length > 1 || "Ingrese al menos 2 nombres",
        (v) => v.split(" ")[1] != "" || "Ingrese al menos 2 nombres",
      ],
      email: [
        (v) => !!v || "Escriba un correo electronico",
        (v) => regexEmail.test(v) || "El correo electronico no es valido",
      ],
      password: [(v) => !!v || "Escriba una contrasena"],
    },
    form: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      checkbox: false,
    },
  }),
  created() {
    console.log(process.env);
  },
  methods: {
    ...mapActions("snackbar", ["showSnackbar"]),
    comparePassword: () => {
      if (this.form.password === this.form.password_confirmation) {
        return true;
      }
      return false;
    },
    onSubmit() {
      if (this.$refs.form.validate() && this.comparePassword) {
        this.valid == true;
      }

      if (this.valid) {
        axios
          .post(`${process.env.VUE_APP_ULR_API}/api/user/create`, this.form)
          .then((res) => {
            localStorage.setItem("uid", res.data._id);
            this.showSnackbar({
              message: "Usuario creado con exito",
              color: "success",
            });
            this.$router.push("/");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.showSnackbar({
          message: "Por favor rellene el formulario como se solicita",
          color: "error",
        });
      }
    },
  },
};
</script>

<style>
</style>
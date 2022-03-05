<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="800">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary " v-bind="attrs" v-on="on">
          Subir<v-icon>mdi-upload</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-actions>
          <v-file-input
            v-model="files"
            placeholder="Sube tu imagenes"
            label="Sube tus imagenes"
            multiple
            accept="image/png, image/jpeg, image/bmp"
            prepend-icon="mdi-camera"
            @change="onFileChange"
          ></v-file-input>
        </v-card-actions>
        <v-card>
          <v-card-subtitle v-if="previews.length > 0">
            Imagenes Subidas
          </v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col v-for="(image, index) in previews" :key="index" md="3">
                <v-img
                  :src="image"
                  class="elevation-1"
                  width="200"
                  height="200"
                  cover
                >
                  <v-sheet
                    color="rgb(0, 0, 0, 0.3)"
                    rounded
                    class="d-flex justify-end"
                    width="100%"
                    elevation="5"
                  >
                    <v-btn icon color="success"
                      ><v-icon color="red">mdi-close</v-icon></v-btn
                    >
                  </v-sheet>
                </v-img>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" @click="onSubmit">
            Guardar <v-icon class="mx-1">mdi-cloud-upload</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error" text>
            Cerrar
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    dialog: false,
    files: [],
    previews: [],
    token: localStorage.getItem("token"),
  }),
  methods: {
    onFileChange() {
      console.log(this.files);
      this.files.forEach((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.previews.push(reader.result);
        };
      });
    },
    onSubmit() {
      let formData = new FormData();
      this.files.forEach((file) => {
        formData.append("images", file);
      });
      axios
        .post(
          `${process.env.VUE_APP_ULR_API}/api/user/upload/images`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.dialog = false;
          this.files = [];
          this.previews = [];
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>
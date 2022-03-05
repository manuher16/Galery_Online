<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h3>Galeria de imagenes</h3>
      </v-col>
      <v-col class="d-flex justify-end"><ModalUploadImage /> </v-col>
    </v-row>
    <ListImages :items="items" />
  </v-container>
</template>

<script>
import axios from "axios";
import ModalUploadImage from "../components/modal/uploadImages.vue";
import { mapMutations } from "vuex";
import ListImages from "../components/lists/listImages.vue";
export default {
  data: () => ({
    items: [],
  }),
  methods: {
    ...mapMutations("modal", ["showModalUploadImages"]),
    getImages() {
      axios
        .get(`${process.env.VUE_APP_ULR_API}/api/user/images`, {
          headers: {
            Authorization: `Bearer ${this.$store.state.session.token}`,
          },
        })
        .then((response) => {
          this.items = response.data;
          console.log(this.items);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getImages();
  },
  components: { ListImages, ModalUploadImage },
};
</script>

<style>
</style>
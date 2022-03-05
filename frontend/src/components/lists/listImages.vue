<template>
  <v-container fluid class="mx-0 px-0">
    <v-card v-for="(content, index) in items" :key="index">
      <v-card-title> {{ months[content._id - 1] }} del 2022</v-card-title>
      <v-card-text>
        <v-row>
          <v-col v-for="(image, i) in content.images" :key="i">
            <ItemImage :item="image" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import ItemImage from "./itemImage.vue";
export default {
  data: () => ({
    months: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
  }),
  components: { ItemImage },
  props: {
    items: Array,
  },
};
</script>

<style>
</style>
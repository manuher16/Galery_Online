<template>
  <v-card width="350" height="350">
    <v-img cover width="350" height="350" :src="`${url}`">
      <v-card
        width="100%"
        height="100%"
        color="transparent "
        flat
        @click="likeItem"
        class=""
      >
        <v-card
          class="d-flex justify-end align-start"
          color="transparent"
          flat
          height="50%"
        >
          <v-card-title>
            <v-btn icon color="gray" large>
              <v-icon :color="item.favorite ? 'red' : 'white'" large>
                mdi-heart
              </v-icon>
            </v-btn>
            <v-btn icon color="white" large>
              <v-icon large>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
        <v-card
          height="50%"
          class="d-flex align-end justify-end align-end"
          color="transparent"
          flat
        >
          <v-card-actions>
            <v-btn icon color="white" large @click="previewItem">
              <v-icon large>mdi-fullscreen</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-card>
    </v-img>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    click: 0,
    url: "",
    token: localStorage.getItem("token"),
  }),
  created() {
    this.url = `${process.env.VUE_APP_ULR_API}/images-user/${this.item.filename}`;
  },
  methods: {
    likeItem() {
      this.click++;
      if (this.click == 2) {
        axios
          .put(
            `${process.env.VUE_APP_ULR_API}/api/user/image/like/${this.item._id}`,
            {
              token: this.token,
            },
            {
              headers: {
                Authorization: `Bearer ${this.$store.state.session.token}`,
              },
            }
          )
          .then((res) => {
            this.item.favorite = res.data.like;
          });

        this.click = 0;
        clearTimeout(this.previeTime);
      }
      if (this.click == 1) {
        setTimeout(() => {
          this.click = 0;
        }, 500);
      }
    },
    previewItem() {
      console.log("preview");
    },
  },
  props: {
    item: Object,
  },
};
</script>

<style>
.bar-top {
  background-color: rgba(139, 138, 138, 0.2);
  color: red;
}
</style>
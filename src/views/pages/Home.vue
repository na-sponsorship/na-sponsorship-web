<template>
  <div class="flex flex-col">
    <div class="flex-1 bg-gray-400 h-new">
      <div class="h-27-rem overflow-hidden" :style="headerSyles"></div>
    </div>
    <div class="flex-1 bg-gray-100 h-new">
      put video here
    </div>
  </div>
</template>

<style>
.h-27-rem {
  height: 27rem;
}
</style>

<script>
import axios from "axios";

export default {
  components: {},
  computed: {
    headerSyles() {
      return {
        backgroundImage: `url(${this.header_image})`,
        backgroundPosition: "100% 5%",
        backgroundSize: "cover"
      };
    }
  },
  data() {
    return {
      childrenCount: null,
      header_image: require("@assets/img/header.jpg")
    };
  },
  created() {
    axios
      .get(process.env.VUE_APP_API + "/children/needingSponsorship")
      .then(res => {
        this.childrenCount = res.data;
      });
  }
};
</script>

<template>
  <div class="flex flex-col">
    <div class="flex-1 bg-gray-400 -mt-16">
      <div class="absolute w-full h-full z-50 ">
        <div class="flex flex-row justify-center">
          <div class="page-width-contraint">
            <div class="flex mt-48">
              <div class="bg-black text-white p-2 lbl">Needing Sponsorship</div>
              <div class="bg-yellow-400 p-2">5</div>
            </div>
            <button class="btn btn-lg btn-primary z-0 mt-32">
              
              Sponsor a Child
              </button>
          </div>
        </div>
      </div>
      <div class="bg-black h-30-rem absolute w-full opacity-35 z-0"></div>
      <div class="h-30-rem overflow-hidden" :style="headerSyles"></div>
    </div>
    <div class="flex-1 bg-gray-100 h-new">
      Content here
    </div>
  </div>
</template>

<style>
.h-30-rem {
  height: 30rem;
}

.lbl::before {
  @apply border-black;
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
        backgroundPosition: "100% 1%",
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

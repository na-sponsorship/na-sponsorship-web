<template>
  <div class="flex flex-col z-30">
    <div class="flex-1 bg-gray-400 -mt-16">
      <div class="absolute w-full h-30-rem z-20">
        <div class="flex flex-row justify-center">
          <div class="page-width-contraint">
            <div class="flex flex-col mt-48">
              <div>
                <h1 class="text-3xl text-white mb-5">
                  Catchy slogan or title here
                </h1>
              </div>
              <div>
                <div class="flex">
                  <div class="flex">
                    <div class="labeled-tag">
                      <span class="fa-lg">
                        <FAIcon :icon="['fas', 'caret-right']" />
                      </span>
                      Needing Sponsorship
                    </div>
                    <div class="bg-yellow-400 pr-3 pl-3 pt-2">
                      {{ childrenCount }} children
                    </div>
                  </div>
                  <button class="btn btn-primary ml-5">
                    Sponsor now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-black h-30-rem absolute w-full opacity-45 z-10"></div>
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
        backgroundPosition: "100% 30%",
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

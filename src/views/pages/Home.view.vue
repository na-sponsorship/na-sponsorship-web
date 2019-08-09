<template>
  <div>
    <hero :header-bg="bgImage">
      <div class="mt-48">
        <h1 class="text-5xl w-8/12 text-white font-cursive">
          Be the reason someone smiles today
        </h1>
      </div>
      <div class="mt-2 mb-8">
        <span class="text-white text-base">
          With your help, we can change the life stories of many children
        </span>
      </div>
      <div class="flex">
        <div
          class="flex tracking-widest text-sm font-bold uppercase text-gray-300"
        >
          <router-link
            to="/children"
            class="bg-orange-500 px-6 py-3 rounded-lg flex items-center hover:bg-orange-600"
            >Sponsor Now</router-link
          >
          <div class="flex ml-4">
            <span
              class="text-gray-300 rounded-l-lg border px-6 border-gray-500 flex items-center"
            >
              {{ childrenCount }}
            </span>
            <span
              class="items-center flex -ml-1 rounded-l-none bg-green-500 px-6 py-2 rounded-r-lg"
              >Children in Program</span
            >
          </div>
        </div>
      </div>
    </hero>
    <div class="flex-1 bg-gray-100 h-new">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/J1P5KgUBgm8"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style>
.lbl::before {
  @apply border-black;
}
</style>

<script>
import axios from "axios";
import hero from "../../components/Hero";

export default {
  components: { hero },
  data() {
    return {
      bgImage: require("@assets/img/headers/children2.jpg"),
      childrenCount: null
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

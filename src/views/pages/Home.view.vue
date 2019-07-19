<template>
  <div>
    <hero :header-bg="bgImage">
      <div>
        <h1 class="text-3xl text-gray-300 font-bold">
          Be the reason someone smiles today
        </h1>
      </div>
      <div class="mt-2 mb-8 opacity-75">
        <span class="text-gray-500 text-base">
          With your help, we can change the life stories of many children
        </span>
      </div>
      <div class="flex">
        <div class="flex tracking-widest text-lg">
          <router-link
            to="/children"
            class="btn btn-primary text-lg flex items-center"
            >Sponsor Now</router-link
          >
          <div class="flex ml-4">
            <span
              class="text-gray-300 rounded-l-lg border px-6 border-gray-500 flex items-center"
            >
              {{ childrenCount }}
            </span>
            <span
              class="items-center flex -ml-1 rounded-l-none bg-green-500 px-6 py-2 rounded-r-lg text-gray-300 uppercase font-semibold"
              >Children in Program</span
            >
          </div>
        </div>
      </div>
    </hero>
    <div class="flex-1 bg-gray-100 h-new">Content here</div>
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
      bgImage: require("@assets/img/headers/children.jpg"),
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

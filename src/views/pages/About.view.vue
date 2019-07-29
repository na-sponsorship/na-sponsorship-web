<template>
  <div>
    <hero :header-bg="bgImage">
      <div>
        <h1 class="text-3xl text-white font-bold text-center">
          About Us
        </h1>
      </div>
      <hr class="bg-white h-px opacity-50 w-1/2" />
      <div class="text-sm text-white text-center">
        <h2>
          A simply dummy text of the pribeen the industry's standard dum .
        </h2>
      </div>
    </hero>
    <div class="flex justify-center">
      <div class="page-width-constraint z-10">
        <div class="flex flex-col -mt-64 -mb-20">
          <div class="flex shadow-lg bg-white rounded-lg p-3">
            <div class="flex-initial w-1/4 h-auto">
              <img
                class="rounded-lg flex-auto h-full w-full object-cover"
                :src="child.image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import hero from "../../components/Hero";
export default {
  components: { hero },
  data() {
    return {
      bgImage: require("@assets/img/headers/children2.jpg")
    };
  }
};
</script>

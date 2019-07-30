<template>
  <div>
    <hero :header-bg="bgImage">
      <div class="mt-48">
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
        <div class="flex flex-col -mt-40 -mb-20">
          <div class="flex shadow-lg bg-white rounded-lg p-3">
            <h2 class="uppercase block">Our Vision</h2>
            <p class="block">
              about page
              <br />
              sadf sdf
              <br />
              sadf sdf
              <br />
              sadf sdf ds
              <br />
              fssf
            </p>
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

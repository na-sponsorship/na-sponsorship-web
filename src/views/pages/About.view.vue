<template>
  <div>
    <hero :header-bg="bgImage" class="mb-32" size="md">
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
        <div class="flex flex-col -mt-64 -mt-40 pb-12">
          <div class="flex shadow-lg bg-white rounded-lg p-20 ">
            <div class="flex-initial w-2/4 h-auto">
              <!-- image here -->
            </div>
            <div class="div flex-1 p-2 mb-2">
              <div class="flex flex-col">
                <div class="px-5 ">
                  <h2 class="text-xl text-gray-700 font-cursive">Our Vision</h2>
                  <hr class="bg-gray-700 h-px" />
                  <p class="text-green-700 pb-5 text-3xl">
                    wewnfnsel;fns;lkslk;fnlaksndlasdiasjdo
                  </p>
                </div>
              </div>
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

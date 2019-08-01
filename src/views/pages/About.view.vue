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
    <div class="flex justify-center">
      <div class="page-width-constraint">
        <div class="flex mb-4 ">
          <div class="w-1/4 bg-gray-500 h-12"></div>
          <div class="w-1/4 bg-gray-400 h-12"></div>
          <div class="w-1/4 shadow-lg bg-white rounded-lg h-12 p-40 mr-4"></div>
          <div class="w-1/4 shadow-lg bg-white rounded-lg h-12 p-40"></div>
        </div>
      </div>
    </div>
    <div class="bg-green-500 h-screen -mt-16 -mt-16">
      <div class="flex justify-center">
        <div class="page-width-constraint">
          <div class="flex mb-4 mt-24">
            <div class="w-1/4 bg-gray-500 h-12"></div>
            <div class="w-1/4 bg-gray-400 h-12"></div>
            <div
              class="w-1/4 shadow-lg bg-white rounded-lg h-12 p-40 mr-4"
            ></div>
            <div class="w-1/4 shadow-lg bg-white rounded-lg h-12 p-40"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white-500 h-screen -mt-16 -mt-16">
      <div class="flex justify-center ">
        <div class="page-width-constraint">
          <div class="flex mb-4 pt-40">
            <div class="w-1/2 h-12">
              <h1 class="text-3xl text-green-500 text-center font-cursive">
                Lorem Sertem
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, distinctio. Unde sit quod in culpa fugit quidem quo
                asperiores distinctio id ipsa.
              </p>
            </div>
            <div class="w-1/2 h-12 pt-10">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                unde omnis dolorem consectetur ipsa. Quod hic excepturi omnis
                facere ad repudiandae quae? Cum fuga, ea corrupti pariatur
                eveniet obcaecati quae?
              </p>
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

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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque,
          nesciunt ducimus!
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
                  <p class="text-green-700 pb-5 text-small">
                    Fighting and eradicating hunger, poverty, illiteracy, and
                    exposure to preventable diseases to all unconditionally,
                    without basing on their religion, race and political
                    affiliation.
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
          <div class="h-12">
            <h1 class="text-3xl text-green-500 font-cursive">Lorem Sertem</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              unde accusamus doloribus corrupti quas cupiditate? Praesentium
              cumque quo aspernatur. Quibusdam quos omnis
            </p>
          </div>
          <div class="w-1/4 h-12"></div>
          <div class="w-1/4 shadow-lg bg-white rounded-lg h-12 p-40 mr-4"></div>
          <div class="w-1/4 shadow-lg bg-white rounded-lg h-12 p-40"></div>
        </div>
      </div>
    </div>
    <div class="bg-green-500 object-cover h-68 w-full -mt-16">
      <div class="flex justify-center">
        <div class="page-width-constraint">
          <div class="flex mb-4 mt-24">
            <div class="w-1/4 h-12">
              <h1 class="text-2xl text-white font-cursive">Our Team</h1>
              <p class="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis deleniti consequuntur minima soluta nisi. Nisi nihil
                architecto molestias voluptate.
              </p>
              <button class="btn btn-primary mt-2 px-2 py-2 text-base mb-8 ">
                Contact Us
              </button>
            </div>
            <div class="w-1/4 h-12"></div>
            <div
              class="w-1/4 shadow-lg bg-white rounded-lg h-12 p-40 mr-4"
            ></div>
            <div class="w-1/4 shadow-lg bg-white rounded-lg h-12 p-40"></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-white-500 object-cover w-full h-cover h-68 mb-64 -mt-10 z-10"
    >
      <div class="flex justify-center ">
        <div class="page-width-constraint">
          <div class="flex mb-4 pt-40">
            <div class="w-1/2 h-12 mr-4">
              <h1 class="text-3xl text-green-500 font-cursive">Lorem Sertem</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, distinctio. Unde sit quod in culpa fugit quidem quo
                asperiores distinctio id ipsa.
              </p>
            </div>
            <div class="w-1/2 h-12 pt-10">
              <p class="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                facere corporis officiis laborum fugiat quam vitae magnam quasi
                laboriosam amet reprehenderit excepturi reiciendis harum, sit
                cupiditate qui. Nihil, sed dolores!
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

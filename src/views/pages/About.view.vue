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
        <h2 class="invisible md:visible lg:visible">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque,
          nesciunt ducimus!
        </h2>
      </div>
    </hero>
    <div class="flex justify-center">
      <div class="w-3/4 z-10 ">
        <div
          class="flex flex-col -mt-56 md:-mt-64 lg:-mt-64 md:-mt-40 lg:-mt-40 pb-12"
        >
          <div
            class="shadow-lg bg-white rounded-lg shadow-lg bg-white p-6 rounded-lg md:flex lg:flex"
          >
            <div
              class="flex-initial w-2/4 h-auto invisible md:visible md:visible"
            >
              <img :src="image" class="" />
            </div>
            <div class="div flex-1 p-2 mb-2">
              <div class="flex flex-col">
                <div class="px-5 ">
                  <h2
                    class="text-xl text-gray-700 font-cursive text-center md:text-left lg:text-left"
                  >
                    Our Vision
                  </h2>
                  <hr class="bg-gray-700 h-px" />
                  <p class="text-green-700 pb-5 text-small">
                    Implementing program’s aimed at fighting and eradicating
                    hunger, poverty, illiteracy, and exposure to preventable
                    diseases to all unconditionally without basing on their
                    religion, race and political affiliation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center"></div>
    <div class="bg-green-500 object-cover h-68 w-full md:-mt-16 lg:-mt-16">
      <div class="flex justify-center">
        <div class="w-3/4">
          <div
            class="flex mb-4 mt-10 md:mt-24 lg:mt-24 flex-col md:flex-row lg:flex-row"
          >
            <div class="w-2/3 h-12 mb-48">
              <h1 class="text-2xl text-white font-cursive">Our Team</h1>
              <p class="text-white">
                Kenneth & Beatrice school directors
              </p>
              <button class="btn btn-primary mt-2 px-2 py-2 text-base mb-8 ">
                Contact Us
              </button>
            </div>
            <div class="w-1/4 h-12"></div>
            <div class="shadow-lg bg-white p-3 rounded-lg mr-4 mb-4">
              <img :src="Kenneth" class="rounded-lg w-full" />
            </div>
            <div class="shadow-lg bg-white p-3 rounded-lg mr-4 mb-4">
              <img :src="Beatrice" class="rounded-lg w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-white-500 object-cover w-full h-cover h-68 mb-64 -mt-10 z-10"
    >
      <div class="flex justify-center">
        <div class="w-3/4">
          <div class="flex mb-4 pt-20">
            <div class="w-2/3 h-12 mr-4 py-26">
              <h1 class="text-3xl text-green-500 font-cursive">
                Goals & Objectives
              </h1>

              <p>
                To help orphans and vulnerable children access education and
                live in a conducive environment
              </p>
              <p>
                To promote agriculture in Kyenjojo and surroundings so as to
                enhance income generation for self sustainability
              </p>
              <p>
                To promote health among the OVCs, widows and rural poor by
                helping them access affordable medical care
              </p>
              <p>
                To promote peace, human rights and engaging in conflicts
                resolutions at family levels
              </p>
              <p>Promotion of spiritual growth among the community members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import hero from "../../components/Hero";
import image from "../../assets/img/Noaharc.jpg";
import Kenneth from "@assets/img/pic/Kenneth.jpg";
import Beatrice from "@assets/img/pic/Beatrice.jpg";

export default {
  components: { hero },
  data() {
    return {
      bgImage: require("@assets/img/headers/children2.jpg"),
      image: image,
      Kenneth,
      Beatrice
    };
  }
};
</script>

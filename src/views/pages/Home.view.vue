<template>
  <div>
    <hero :header-bg="bgImage">
      <div class="flex m-auto md:w-3/4">
        <div class="flex flex-col mx-5 md:mx-0">
          <div class="mt-48">
            <h1
              class="text-3xl md:text-5xl text-white font-cursive text-center mb-5 md:text-left md:mb-0"
            >
              With your help, we can change the life stories of many children.
            </h1>
          </div>
          <div
            class="flex flex-col w-full tracking-widest text-2xl font-bold uppercase text-gray-300 md:flex-row md:text-sm"
          >
            <router-link
              to="/children"
              class="bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600 text-center"
              >Sponsor Now</router-link
            >
            <div class="flex mt-5 md:mt-0 md:ml-5">
              <span
                class="text-gray-300 rounded-l-lg border px-6 border-gray-500 inline-flex items-center"
              >
                {{ childrenCount }}
              </span>
              <span
                class="rounded-l-none bg-green-500 px-6 py-3 rounded-r-lg w-full"
                >Children in Program</span
              >
            </div>
          </div>
        </div>
      </div>
    </hero>
    <div class="flex flex-col m-auto md:w-3/4 md:flex-row ">
      <div
        class="flex-1 -mt-16 z-10 p-5 bg-white rounded-lg shadow-2xl mr-6"
        style="height: 24rem"
      >
        <iframe
          class="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/J1P5KgUBgm8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="flex-1 items-center justify-around mr-6 mb-12 bg-white p-2 shadow-lg">
        <div class="flex flex-col text-center pt-6">
          <h2 class="text-3xl font-cursive text-green-500">What We Do</h2>
          <p class="">
            Noah's Arc is a Christian based organization, giving a home to
            nearly 100 children who are abandoned, thrown away, abused of left
            behind. More than 395 children from the poorest families in the
            surrounding communities enjoy free education in our Joy Christian
            School.
          </p>
        </div>
      </div>
      <div class="flex-1 items-center justify-around mb-32 bg-white p-2 shadow-lg z-10 p-4">
        <div class="flex flex-col text-center">
          <h2 class="text-3xl font-cursive text-green-500 md:mt-6">
            How you can help?
          </h2>
          <p class="">
            You can get involved with our work by joining one of our sponsorship
            programs and sponsor a child from our home or sponsor a teacher from
            our school. You can also support our work with your donation to one
            of our projects or your time as a volunteer.
          </p>
        </div>
      </div>
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

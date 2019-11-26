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
    <div class="flex justify-center  flex-col m-auto md:flex-row md:w-3/4">
      <div
        class="flex-1 -mt-16 z-10 p-3 bg-white rounded-lg shadow-2xl"
        style="height: 30rem"
      >
        <iframe
          class="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/J1P5KgUBgm8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div
        class="flex-1 items-center justify-around md:mr-4 md:mb-12 p-4 z-10 md:-mt-20"
      >
        <div
          class="flex flex-col text-center pt-6 bg-white px-2 py-3 shadow-lg rounded-lg justify-around"
          style="height: 30rem;"
        >
          <h2 class="text-3xl font-cursive text-green-500">What We Do</h2>
          <p class="m-2">
            Noah's Arc is a Christian based organization, giving a home to
            nearly 100 children who are abandoned, thrown away, abused of left
            behind. More than 395 children from the poorest families in the
            surrounding communities enjoy free education in our Joy Christian
            School.
          </p>
          <h2 class="text-3xl font-cursive text-green-500 md:mt-6">
            How you can help?
          </h2>
          <p class="m-2">
            You can get involved with our work by joining one of our sponsorship
            programs and sponsor a child from our home or sponsor a teacher from
            our school. You can also support our work with your donation to one
            of our projects or your time as a volunteer.
          </p>
        </div>
      </div>
    </div>
    <div class="mx-auto w-3/4 my-4">
      <h2 class="text-xl">Ministry Partners</h2>
      <div class="flex my-2 flex-wrap">
        <a
          :href="ministryPartners.emmaus.link"
          class="mx-2 my-2"
          target="_blank"
        >
          <img
            :src="ministryPartners.emmaus.logo"
            class="bg-gray-800 p-2 shadow-xl rounded h-12"
          />
        </a>

        <a
          href="https://www.thinspaceafrica.org/"
          class="mx-2 my-2"
          target="_blank"
        >
          <span
            class="h-12 inline-flex items-center px-5 font-bold text-lg text-gray-800 rounded shadow"
            style="background-color: #f7db09"
            >ThinSpace Africa</span
          >
        </a>
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
import axios from 'axios';
import hero from '../../components/Hero';

export default {
  components: { hero },
  data() {
    return {
      bgImage: require('@assets/img/headers/children2.jpg'),
      ministryPartners: {
        emmaus: {
          logo: require('@assets/img/partners/emmaus-logo-white-text.svg'),
          link: 'http://emmausbible.com/',
        },
      },
      childrenCount: null,
    };
  },
  created() {
    axios.get(process.env.VUE_APP_API + '/children/needingSponsorship').then(res => {
      this.childrenCount = res.data;
    });
  },
};
</script>

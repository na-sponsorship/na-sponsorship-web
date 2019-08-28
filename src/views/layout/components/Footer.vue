<template>
  <div class="mt-16">
    <Modal v-if="donationModal">
      <pre>Form goes here</pre>
    </Modal>
    <hero :header-bg="bgImage" size="md">
      <div class="md:w-3/4 md:m-auto">
        <div class="mt-32">
          <h1 class="text-3xl text-green-500 text-center font-cursive">
            Vestibulum id nisi Est
          </h1>
        </div>

        <div class="text-sm text-white text-center">
          <p>
            A simply dummy text of the pribeen the industry's standard dum imply
            dummy text of the pribeen the industry's standard dum fsafsfsfa
            imply dummy text of the pribeen the industry's standard
          </p>
          <button
            class="btn btn-primary mt-2 px-6 py-2 text-base mb-8 mr-2 mt-4"
            @click="donate()"
            @onDismiss="donationModal = false"
          >
            Read More
          </button>
        </div>
      </div>
    </hero>
    <div class="bg-brown-fade-to-black">
      <div class="flex flex-col md:flex-row md:w-3/4 md:m-auto">
        <div class="flex-1 px-5">
          <img :src="logoLight" class=" my-2" />
          <p class="leading-relaxed font-medium text-white text-indent">
            Noah’s ARC is a Christian based NGO/CBO operating in Kyenjojo
            District, Mid-Western Uganda.
          </p>
          <p class="leading-relaxed font-medium text-white text-indent">
            The main focus is on aimed at fighting and eradicating hunger,
            poverty, illiteracy, and exposure to preventable diseases to all
            unconditionally regardless of religion, race and political
            affiliation.
          </p>
        </div>
        <div class="flex-1 mx-5 my-2">
          <h2 class="uppercase text-white text-3xl">About Us</h2>
          <span class="block border-b h-2 mb-2 w-1/6">&nbsp;</span>
          <ul>
            <li class="my-2 text-white">
              <a href="">History</a>
            </li>
            <li class="my-2 text-white">
              <a href="">How We Serve</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="flex items-center px-5 py-5 justify-between md:w-3/4 md:m-auto"
      >
        <div class="text-sm text-white">
          &copy; 2019 All right reserved. Noah's Arc
        </div>
        <div class="flex">
          <div
            class="px-2"
            v-bind:key="index"
            v-for="(item, index) in socialLinks"
          >
            <a :href="item.to" target="_blank">
              <FAIcon class="text-white text-2xl" :icon="['fab', item.icon]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.bg-brown-fade-to-black {
  background: linear-gradient(
    0deg,
    rgba(16, 13, 11, 1) 0%,
    rgba(82, 63, 56, 1) 100%
  );
}
</style>

<script>
import hero from "../../../components/Hero";
import Modal from "../../../components/ui/Modal";

export default {
  components: { hero, Modal },
  data() {
    return {
      donationModal: false,
      bgImage: require("@assets/img/headers/children2.jpg"),
      logoLight: require("@assets/img/logo/light@3x.png"),
      socialLinks: [
        { icon: "instagram", to: "http://www.instagram.com/noahsark10/" },
        {
          icon: "facebook-f",
          to:
            "http://www.facebook.com/profile.php?id=100000461473064&ref=content_filter"
        },
        {
          icon: "youtube",
          to: "http://www.youtube.com/channel/UCpHmZSfKw3iFA0hnWI9CX6A"
        }
      ]
    };
  },
  methods: {
    donate() {
      debugger;
      this.donationModal = true;
    },
    closeModal() {
      debugger;
      this.donationModal = false;
    }
  }
};
</script>

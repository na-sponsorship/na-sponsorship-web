<template>
  <div class="mt-16">
    <hero :header-bg="bgImage" size="md">
      <div class="mt-32">
        <h1 class="text-3xl text-green-500 text-center font-cursive">
          Vestibulum id nisi Est
        </h1>
      </div>

      <div class="text-sm text-white text-center">
        <p>
          A simply dummy text of the pribeen the industry's standard dum imply
          dummy text of the pribeen the industry's standard dum fsafsfsfa imply
          dummy text of the pribeen the industry's standard
        </p>
        <button class="btn btn-primary mt-2 px-6 py-2 text-base mb-8 mr-2 mt-4">
          Read More
        </button>
      </div>
    </hero>
    <div class="bg-brown-fade-to-black">
      <div class="flex justify-center">
        <div class="page-width-constraint">
          <div class="antialiased flex font-bold py-20 text-white">
            <div class="flex-1 font-medium leading-relaxed text-indent">
              <img :src="logoLight" />
              <p>
                Noah’s ARC is a Christian based NGO/CBO operating in Kyenjojo
                District, Mid-Western Uganda.
              </p>
              <p>
                The main focus is on aimed at fighting and eradicating hunger,
                poverty, illiteracy, and exposure to preventable diseases to all
                unconditionally regardless of religion, race and political
                affiliation.
              </p>
            </div>
            <div class="flex-1 mx-16 uppercase">
              <h2 class="text-3xl">About Us</h2>
              <span class="block border-b h-2 mb-2 w-1/6">&nbsp;</span>
              <ul>
                <li class="mb-4">
                  <a href="">History</a>
                </li>
                <li class="mb-4">
                  <a href="">How We Serve</a>
                </li>
              </ul>
            </div>
            <div class="flex-1 mx-2 uppercase">
              <h2 class="text-3xl">Conect with Us:</h2>
              <span class="block border-b h-2 mb-2 w-1/6">&nbsp;</span>
              <ul>
                <li class="mb-4">
                  <a href="">Facebook</a>
                </li>
                <li class="mb-4">
                  <a href="">Instagram</a>
                </li>
                <li class="mb-4">
                  <a href="">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex justify-center border-t mt-4 pt-5 pb-5 text-white border-gray-900"
      >
        <div class="page-width-constraint">
          <div class="flex items-center">
            <div class="w-3/4 text-center text-grey text-sm">
              &copy; 2019 All right reserved. Noah's Arc
            </div>
            <div class="w-1/4">
              <div class="flex">
                <div
                  class="social-icons"
                  v-bind:key="index"
                  v-for="(item, index) in socialLinks"
                >
                  <a :href="item.to" target="_blank">
                    <FAIcon class="block" :icon="['fab', item.icon]" />
                  </a>
                </div>
              </div>
            </div>
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
.social-icons {
  width: 25px;
  @apply m-2 p-2 text-2xl;
}
.contact-form input,
.contact-form textarea {
  @apply mt-2 mb-2 p-2 w-full bg-white;
  @apply text-black text-sm font-light;
  @apply rounded-sm resize-none outline-none;
}
</style>

<script>
import hero from "../../../components/Hero";

export default {
  components: { hero },
  data() {
    return {
      bgImage: require("@assets/img/headers/children2.jpg"),
      logoLight: require("@assets/img/logo/light@3x.png"),
      socialLinks: [
        { icon: "instagram", to: "http://www.instagram.com/noahsark10/" },
        {
          icon: "facebook-f",
          to:
            "http://www.facebook.com/profile.php?id=100000461473064&ref=content_filter"
        },
        { icon: "twitter", to: "http://www.twitter.com" },
        {
          icon: "youtube",
          to: "http://www.youtube.com/channel/UCpHmZSfKw3iFA0hnWI9CX6A"
        }
      ]
    };
  }
};
</script>

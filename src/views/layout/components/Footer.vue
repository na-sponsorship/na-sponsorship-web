<template>
  <div class="bg-brown-500">
    <div class="flex justify-center">
      <div class="page-width-contraint">
        <div class="antialiased flex font-bold opacity-75 py-20 text-gray-300">
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
          <div class="flex-1 mx-4 uppercase">
            <h2 class="text-3xl">About Us</h2>
            <span class="block border-b h-2 mb-2 w-1/6">&nbsp;</span>
            <ul>
              <li>
                <a href="">History</a>
              </li>
              <li>
                <a href="">How We Serve</a>
              </li>
            </ul>
          </div>
          <div class="flex-1 mx-2 uppercase">
            <h2 class="text-3xl">Conect with Us:</h2>
            <span class="block border-b h-2 mb-2 w-1/6">&nbsp;</span>
            <ul>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex justify-center border-t border-grey-darker mt-4 pt-5 pb-5 bg-black text-gray-500 opacity-75 border-gray-600"
    >
      <div class="page-width-contraint">
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
                <FAIcon class="block" :icon="['fab', item.icon]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.w-370 {
  width: 370px;
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
export default {
  data() {
    return {
      logoLight: require("@assets/img/logo/light@3x.png"),
      socialLinks: [
        { icon: "facebook-f", to: "http://www.facebook.com" },
        { icon: "twitter", to: "http://www.twitter.com" },
        { icon: "youtube", to: "http://www.youtube.com" }
      ]
    };
  }
};
</script>

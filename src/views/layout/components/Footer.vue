<template>
  <div class="bg-grey-darkest text-white pt-4">
    <div class="flex justify-center">
      <div class="page-width-contraint">
        <div class="flex">
          <div class="flex-1">
            <h2 class="uppercase text-sm mb-2">Text Widget</h2>
          </div>
          <div class="flex-1">
            <h2 class="upppercase text-sm mb-2">Have a Question?</h2>
            <form class="contact-form">
              <input class type="text" placeholder="Your Name" />
              <input class type="text" placeholder="Your Email" />
              <textarea
                class
                cols="30"
                rows="5"
                placeholder="Your Message"
              ></textarea>
              <button class="btn btn-primary float-right">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center border-t border-grey-darker mt-4 pt-5">
      <div class="page-width-contraint">
        <div class="flex items-center">
          <div class="w-3/4 text-center text-grey text-sm">
            &copy; 2019 All right reserved. Development by HTML Stream
          </div>
          <div class="w-1/4 text-right text-grey text-sm">
            <div
              class="border text-white bg-black inline-block p-4 mr-2 text-lg"
              v-for="(item, index) in socialLinks"
              v-bind:key="index"
            >
              <FAIcon class="block" :icon="['fab', item.icon]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.contact-form input,
.contact-form textarea {
  @apply mt-2 mb-2 p-2 w-full bg-black;
  @apply text-grey-light text-sm font-light;
  @apply border-grey-darker border rounded resize-none outline-none;
}
</style>

<script>
export default {
  data() {
    return {
      socialLinks: [
        { icon: "facebook-f", to: "http://www.facebook.com" },
        { icon: "twitter", to: "http://www.twitter.com" },
        { icon: "youtube", to: "http://www.youtube.com" }
      ]
    };
  }
};
</script>

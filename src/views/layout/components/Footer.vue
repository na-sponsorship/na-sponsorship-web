<template>
  <div class="footer">
    <div class="flex justify-center">
      <div class="page-width-contraint">
        <div class="flex">
          <div class="flex-1">
            <h2>Text Widget</h2>
          </div>
          <div class="flex-none w-370">
            <h2>Have a Question?</h2>
            <form class="contact-form">
              <input class type="text" placeholder="Your Name" />
              <input class type="text" placeholder="Your Email" />
              <textarea
                class
                cols="30"
                rows="5"
                placeholder="Your Message"
              ></textarea>
              <button class="btn btn-primary float-right">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center border-t border-grey-darker mt-4 pt-5 pb-5">
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

.footer {
  @apply bg-gray-800 text-white pt-4;
}

.footer h2 {
  @apply uppercase text-sm mb-2 font-bold;
}
.social-icons {
  width: 25px;
  @apply m-2 p-2 text-2xl;
}
.contact-form input,
.contact-form textarea {
  @apply mt-2 mb-2 p-2 w-full bg-gray-900;
  @apply text-gray-100 text-sm font-light;
  @apply rounded-sm resize-none outline-none;
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

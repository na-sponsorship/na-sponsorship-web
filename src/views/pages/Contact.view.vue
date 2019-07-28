<template>
  <div>
    <hero :header-bg="bgImage">
      <div>
        <h1 class="text-3xl text-white font-bold text-center">
          Contact Us
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
      <div
        class="page-width-contraint z-10 -mt-56  px-16 rounded-lg shadow-2xl mb-3 pt-3 bg-white"
      >
        <div class="flex mb-3 mt-10">
          <div class="flex-1 mr-2 form-group">
            <input placeholder="First Name" class="form-input w-full" />
          </div>
          <div class="flex-1 mr-2 form-group">
            <input placeholder="Last Name" class="form-input w-full" />
          </div>
        </div>
        <div class="flex mb-3">
          <div class="flex-1 mr-2 form-group">
            <input placeholder="Email" class="form-input w-full" />
          </div>
        </div>
        <div class="flex mb-3">
          <div class="flex-1 mr-2 form-group">
            <textarea
              placeholder="Message Us"
              class="form-input w-full h-56"
            ></textarea>
          </div>
        </div>
        <div class="flex-1">
          <button
            class="btn btn-primary mt-2 px-6 py-2 text-base mb-8 float-right mr-2 "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-center mb-32 mt-10 ">
      <div class="page-width-contraint">
        <div class="flex mb-4">
          <div class="w-1/4 bg-white-500 h-12">
            <h1 class="font-bold">Our Location</h1>
            <p>Str 24 Avenue North Atlanta Georgia 30043 USA</p>
          </div>
          <div class="w-1/4 bg-white-400 h-12"></div>
          <div class="w-1/4 bg-white-500 h-12"></div>
          <div class="w-1/4 bg-white-500 h-12">
            <h1 class="font-bold">Phone</h1>
            <p>
              <FAIcon class="inline-flex mr-1" :icon="['fas', 'phone']" />+ 1
              404-384-4324
            </p>
          </div>
          <div class="w-1/4 bg-white-400 h-12">
            <h1 class="font-bold">Email</h1>
            <p>
              <FAIcon class="inline-flex mr-1" :icon="['fas', 'envelope']" />
              info@noahsarc.com
            </p>
          </div>
        </div>
      </div>
    </div>
    <hero :header-bg="bgImage"></hero>
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

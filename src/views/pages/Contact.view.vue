<template>
  <div>
      <div class="bg-auto">
      <hero :header-bg="bgImage"></hero></div>
       <div class="flex justify-center mb-6">
        <div class="flex flex-col px-16 bg-gray-200 rounded-lg shadow-2xl mb-4 pb-10 -m-64 z-10">
            <span class="text-green-600 text-4xl font-bold my-3">Contact Form</span>
            <span class="uppercase text-sm my-4 font-bold text-gray-700">Your Information</span>
                <div class="flex mb-3">
                <div class="flex-1 mr-2 form-group">
                    <input placeholder="First Name" class="form-input w-full">
                </div>
                <div class="flex-1 form-group">
                    <input placeholder="Last Name" class="form-input w-full">
                </div>
            </div>
            <div class="flex mb-3">
                <div class="flex-1 form-group"><input placeholder="Email" class="form-input w-full"></div>
            </div>
            <div class="flex mb-5">
                <div class="flex-1 form-group pb-4"><input placeholder="Send us a message" class="form-input w-full"></div>
            </div>
            <button type="button" class="btn btn-secondary mt-2 px-3 py-2 text-base float-right">
                    Send
            </button>
        </div>
    </div>
</div>
</template>
<script>
import axios from "axios";
import hero from "../../components/Hero";

export default {
  components: { hero },
  data() {
    return {
      bgImage: require("@assets/img/headers/children2.jpg"),
      
    }
  }
 };
</script>
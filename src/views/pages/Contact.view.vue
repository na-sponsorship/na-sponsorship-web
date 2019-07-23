<template>
<div>
    <hero :header-bg="bgImage">
        <div>
            <h1 class="text-3xl text-gray-300 font-bold text-center">
                Contact Us
            </h1>
        </div>
        <hr class="bg-white h-px opacity-50 w-1/2">
        <div class="text-sm text-gray-300  text-center">
            <h2>A simply dummy text of the printing and typesetting industry.</h2>
        </div>
    </hero>
    <div class="flex justify-center">
        <div class="page-width-contraint z-10 -mt-56 bg-gray-100 px-16 rounded-lg">
            
            <div class="flex mb-3 mt-10">
                <div class="flex-1 mr-2 form-group">
                   <input placeholder="First Name" class="form-input w-full">
                </div>
                <div class="flex-1 mr-2 form-group">
                   <input placeholder="Last Name" class="form-input w-full">
                </div>
            </div>
        <div class="flex mb-3">
            <div class="flex-1 mr-2 form-group">
                <input placeholder="Email" class="form-input w-full">
            </div>
        </div>
        <div class="flex mb-3">
            <div class="flex-1 mr-2 form-group">
                <textarea placeholder="Message Us" class="form-input w-full h-56"></textarea>
            </div>
        </div>
        <div class="flex-1">
            <button class="btn btn-primary mt-2 px-6 py-2 text-base mb-8">Submit</button>
        </div>
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
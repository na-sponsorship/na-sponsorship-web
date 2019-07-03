<template>
  <div class="flex-1 bg-gray-400 -mt-16">
    <div class="absolute w-full h-40-rem z-20">
      <div class="flex flex-row justify-center">
        <div class="page-width-contraint">
          <div class="flex flex-col mt-48">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black h-40-rem absolute w-full opacity-45 z-10"></div>
    <div class="h-40-rem overflow-hidden" :style="headerSyles"></div>
  </div>
</template>

<script>
export default {
  computed: {
    headerSyles() {
      return {
        backgroundImage: `url(${this.header_image})`,
        backgroundPosition: "100% 30%",
        backgroundSize: "cover"
      };
    }
  },
  data() {
    return {
      header_image: require("@assets/img/header.jpg")
    };
  }
};
</script>

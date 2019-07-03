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
    <div class="absolute bg-black h-full opacity-50 w-full h-40-rem"></div>
    <div class="h-40-rem overflow-hidden" :style="headerSyles"></div>
  </div>
</template>

<script>
export default {
  props: {
    headerBg: {
      type: String,
      default: "header.jpg"
    }
  },
  computed: {
    headerSyles() {
      return {
        backgroundImage: `url(${this.headerBg})`,
        backgroundPosition: "100% 30%",
        backgroundSize: "cover"
      };
    }
  },
};
</script>

<style scoped>
.h-40-rem {
  height: 40rem;
}
</style>

<template>
  <div class="flex-1 bg-gray-400 -mt-16">
    <div class="absolute w-full" :class="heroSize">
      <div class="flex flex-row justify-center">
        <div class="page-width-constraint">
          <div class="flex flex-col">
            <div class="z-10">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute bg-black h-full opacity-50 w-full"
      :class="heroSize"
    ></div>
    <div class="overflow-hidden" :class="heroSize" :style="headerSyles"></div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String
    },
    headerBg: {
      type: String,
      default: "header.jpg"
    }
  },
  computed: {
    heroSize() {
      switch (this.size) {
        case "sm":
          return "h-64";
        case "md":
          return "h-27-rem";
        case "lg":
        default:
          return "h-40-rem";
      }
    },
    headerSyles() {
      return {
        backgroundImage: `url(${this.headerBg})`,
        backgroundPosition: "100% 30%",
        backgroundSize: "cover"
      };
    }
  }
};
</script>

<style scoped>
.h-27-rem {
  height: 27rem;
}
.h-40-rem {
  height: 40rem;
}
</style>

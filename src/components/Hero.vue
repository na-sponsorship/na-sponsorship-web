<template>
  <div class="flex-1 bg-gray-400">
    <div class="absolute w-full" :class="heroSize">
      <div class="flex flex-row justify-center">
        <div class="flex flex-col">
          <div style="z-index:1">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute bg-black h-full opacity-75 w-full"
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

<style>
.h-27-rem {
  height: 27rem;
}
.h-40-rem {
  height: 40rem;
}
</style>

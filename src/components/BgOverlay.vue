<template lang="pug">
div.js-slide.u-bg-overlay.g-color-white.g-bg-black-opacity-0_5--after.g-bg-img-hero.slick-slide.slick-current.slick-active.bg-overlay(:style="style")
    slot    
</template>

<script>
export default {
  data() {
    return {
      innerWidth: window.innerWidth
    };
  },
  computed: {
    style() {
      return `width: ${this.innerWidth}px`;
    }
  },
  methods: {
    setImgWidth() {
      this.innerWidth = window.innerWidth;
    }
  },
  mounted() {
    window.addEventListener("resize", this.setImgWidth);
  }
};
</script>

<style lang="scss">
.bg-overlay {
  background-image: url("../assets/img-temp/1920x1280/img2.jpg");
  height: auto;
  opacity: 1;
  z-index: 999;
  position: relative;
  left: 0px;
  top: 0px;
}
</style>

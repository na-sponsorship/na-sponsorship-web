<template>
  <div v-if="shouldBeEnabled">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["in"],
  computed: {
    shouldBeEnabled() {
      return !(this.in === process.env.NODE_ENV);
    }
  }
};
</script>

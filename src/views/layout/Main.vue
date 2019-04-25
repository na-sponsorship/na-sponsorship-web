<template lang="pug">
  div.wrapper
    div.w-full
      Header
      slot
      Footer
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="postcss">
.wrapper {
  @apply flex flex-row m-0 p-0;
}
</style>

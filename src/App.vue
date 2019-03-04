<template lang="pug">
Main
  router-view

</template>

<script>
import Main from "./views/layout/Main";

export default {
  components: { Main }
};
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "./assets/css/unify.css";
@import "./assets/css/slick.css";
@import "./assets/css/styles.op-charity.css";
@import "~basscss/css/basscss.css";
</style>

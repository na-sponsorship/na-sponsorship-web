<template lang="pug">
Main
  router-view(:key="$route.fullPath")

</template>

<script>
import Main from "./views/layout/Main";

export default {
  components: { Main }
};
</script>

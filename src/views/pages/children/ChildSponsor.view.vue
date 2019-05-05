<template>
  <div class="flex justify-center">
    <div class="page-width-contraint">
      <pre>child info here</pre>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      child: null
    };
  },
  created() {
    axios
      .get(`${process.env.VUE_APP_API}/children/${this.$route.params.id}`)
      .then(child => {
        this.child = child.data;
      });
  }
};
</script>

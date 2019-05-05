<template>
  <pre>child info here</pre>
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

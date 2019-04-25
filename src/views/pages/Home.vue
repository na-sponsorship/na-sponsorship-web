<template lang="pug">
  div
    div.bg-red asdf
    div.bg-blue blue here
</template>


<script>
import axios from "axios";
import BgOverlay from "@components/BgOverlay";

export default {
  components: {
    BgOverlay
  },
  data() {
    return {
      childrenCount: null
    };
  },
  created() {
    axios
      .get(process.env.VUE_APP_API + "/children/needingSponsorship")
      .then(res => {
        this.childrenCount = res.data;
      });
  }
};
</script>

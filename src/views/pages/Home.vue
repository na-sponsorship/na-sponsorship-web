<template>
  <div class="">
    <div class="bg-grey-darker h-new"></div>
    <div class="bg-grey-darker h-new"></div>
   </div>
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

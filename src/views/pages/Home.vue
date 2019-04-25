<template>
  <div class="">
    <div class="bg-blue h-new">red zone</div>
    <div class="bg-red h-new">red zone</div>
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

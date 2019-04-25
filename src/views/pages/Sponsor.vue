<template>
  <div class="flex justify-center">
    <div class="page-width-contraint">
      <div class="flex flex-col">
        <div class="border border-black text-center p-5">
          <p class="uppercase">How you <span class="bg-black text-white p-2 font-bold">can help</span></p>
          <p>MOre info here</p>
        </div>
        <div class="border border-black">row</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import BgOverlay from "@components/BgOverlay";
import ChildCard from "@components/ChildCard";
import { chunk } from "lodash-es";

export default {
  components: {
    BgOverlay,
    ChildCard
  },
  data() {
    return {
      children: []
    };
  },
  computed: {
    groupedChildren() {
      return chunk(this.children, 2);
    }
  },
  created() {
    axios.get(process.env.VUE_APP_API + "/children").then(children => {
      this.children = children.data;
    });
  }
};
</script>

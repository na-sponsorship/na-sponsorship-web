<template>
  <div class="flex justify-center">
    <div class="page-width-contraint">
      <div class="flex flex-col">
        <div class="text-center p-5">
          <p class="uppercase m-5">
            How you
            <span class="bg-black text-white p-2 font-bold">can help</span>
          </p>
          <p>More info here</p>
        </div>
        <div class="flex flex-wrap">
          <ChildCard
            v-for="(child, index) in children"
            v-bind:key="index"
            :child="child"
            @onSponsor="sponsor"
          ></ChildCard>
        </div>
      </div>
    </div>

    <SponsorChildModal
      :child="selectedChild"
      @onDismiss="selectedChild = null"
    ></SponsorChildModal>
  </div>
</template>

<script>
import axios from "axios";

import SponsorChildModal from "@components/modals/SponsorChildModal";

import ChildCard from "@components/ChildCard";
import { chunk } from "lodash-es";

export default {
  components: {
    SponsorChildModal,
    ChildCard
  },
  data() {
    return {
      children: [],
      selectedChild: null
    };
  },
  computed: {
    groupedChildren() {
      return chunk(this.children, 2);
    }
  },
  methods: {
    sponsor(child) {
      this.selectedChild = child;
    }
  },
  created() {
    var elements = this.$Stripe.elements();
    axios.get(process.env.VUE_APP_API + "/children").then(children => {
      this.children = children.data;
    });
  },
  mounted() {}
};
</script>

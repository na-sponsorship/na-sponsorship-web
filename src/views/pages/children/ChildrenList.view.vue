<template>
  <div>
    <hero :header-bg="bgImage">
      <div class="text-center">
        <span class="text-white text-4xl">Sponsor a Child</span>
        <hr class="bg-white h-px opacity-50 w-1/2" />
      </div>
    </hero>
    <div class="flex justify-center">
      <div class="page-width-contraint -mt-40 z-10">
        <div class="flex flex-col">
          <div class="flex flex-wrap justify-center">
            <ChildCard
              v-for="(child, index) in children"
              v-bind:key="index"
              :child="child"
              @onSponsor="sponsor"
            ></ChildCard>
          </div>
        </div>
        <div class="flex justify-center my-10">
          <button class="btn btn-secondary mx-2">Previous</button>
          <button class="btn btn-secondary mx-2">1</button>
          <button class="mx-2 font-bold text-gray-700">2</button>
          <button class="btn btn-secondary mx-2">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import hero from "@components/Hero";
import ChildCard from "@components/ChildCard";
import { chunk } from "lodash-es";

export default {
  components: {
    ChildCard,
    hero
  },
  data() {
    return {
      children: [],
      selectedChild: null,
      bgImage: require("@assets/img/headers/children.jpg")
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

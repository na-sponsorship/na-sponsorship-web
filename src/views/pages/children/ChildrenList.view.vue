<template>
  <div>
    <hero>
      hero here
    </hero>
    <div class="flex justify-center">
      <div class="page-width-contraint -mt-40 z-10">
        <div class="flex flex-col">
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
import hero from "../../../components/Hero";
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

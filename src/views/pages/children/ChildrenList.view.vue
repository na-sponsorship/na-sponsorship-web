<template>
  <div>
    <hero :header-bg="bgImage">
      <div class="text-center mt-48">
        <span class="text-white text-4xl">Sponsor a Child</span>
        <hr class="bg-white h-px opacity-50 w-1/2" />
      </div>
    </hero>
    <div class="flex justify-center">
      <div class="page-width-constraint -mt-40 z-10">
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
          <Pagination
            :pages="pagination.pageCount"
            :currentPage="pagination.currentPage"
            @on-page-navigate="goToPage"
          ></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import hero from "@components/Hero";
import ChildCard from "@components/ChildCard";
import Pagination from "@components/Pagination";
import { chunk, get } from "lodash-es";

export default {
  components: {
    Pagination,
    ChildCard,
    hero
  },
  data() {
    return {
      children: [],
      selectedChild: null,
      bgImage: require("@assets/img/headers/children.jpg"),
      pagination: {
        currentPage: null,
        totalItems: null,
        pageCount: null
      }
    };
  },
  computed: {
    groupedChildren() {
      return chunk(this.children, 2);
    }
  },
  methods: {
    goToPage(page) {
      this.$router.push({ path: "/children", query: { page } });
    },

    loadPage(page) {
      axios
        .get(`${process.env.VUE_APP_API}/children?page=${page}`)
        .then(children => {
          this.children = children.data.items;
          this.pagination.pageCount = children.data.pageCount;
          this.pagination.totalItems = children.data.totalItems;

          if (this.children.length === 0) {
            this.$router.replace({ path: "/children" });
          }
        });
    },
    sponsor(child) {
      this.selectedChild = child;
    }
  },
  created() {
    this.pagination.currentPage = parseInt(get(this, "$route.query.page", 1));

    this.loadPage(this.pagination.currentPage);
  },
  mounted() {}
};
</script>

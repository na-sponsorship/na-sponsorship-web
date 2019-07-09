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
          <button
            :disabled="pagination.currentPage <= 1"
            class="btn btn-secondary mr-6"
            @click="goToPage(pagination.currentPage - 1)"
          >
            Previous
          </button>
          <button
            class="mx-2"
            :class="{
              'btn btn-secondary': pagination.currentPage == page,
              'font-bold text-gray-700': pagination.currentPage != page
            }"
            v-for="page in pagination.pageCount"
            :key="page"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>
          <button
            :disabled="pagination.currentPage == pagination.pageCount"
            class="btn btn-secondary ml-6"
            @click="goToPage(pagination.currentPage + 1)"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import hero from "@components/Hero";
import ChildCard from "@components/ChildCard";
import { chunk, get } from "lodash-es";

export default {
  components: {
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
    this.pagination.currentPage = get(this, "$route.query.page", 1);

    this.loadPage(this.pagination.currentPage);
  },
  mounted() {}
};
</script>

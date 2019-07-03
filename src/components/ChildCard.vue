<template>
  <div class="m-8 w-64 bg-white p-4 rounded rounded-lg shadow-2xl">
    <div class="flex flex-col content-start h-full">
      <div class="flex-1 h-64">
        <img class="w-full rounded rounded-lg flex-auto h-full w-full object-cover" :src="child.image" />
      </div>
      <div class="flex-1">
        <div class="flex flex-col h-48">
          <p class="flex p-2 h-full story-fade overflow-hidden relative">{{ child.story | capitalize }}</p>
          <div class="flex-auto mt-2 text-center">
            <router-link
              class="btn btn-primary"
              :to="{ name: 'children.view', params: { id: child.id } }"
            >Learn More</router-link>
            <router-link
              class="btn btn-primary ml-2"
              :to="{ name: 'children.view', params: { id: child.id } }"
            >sponsor</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  created() {
    console.log(this.child);
  },
  props: {
    child: {
      type: Object
    }
  },
  methods: {
    sponsor(child) {
      this.$emit("onSponsor", child);
    },
    moreInfo(child) {
      this.$emit("onMoreInfo", child);
    },
    getAge(age) {
      return dayjs().diff(age, "years");
    }
  }
};
</script>

<style lang="scss" scoped>
.story-fade::after {
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient( to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50% );
  height: 2rem;
}
</style>

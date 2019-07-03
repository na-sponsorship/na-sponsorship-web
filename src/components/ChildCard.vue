<template>
  <div class="m-8 w-64 bg-white p-4 rounded rounded-lg shadow-2xl">
    <div class="flex flex-col content-start">
      <div class="flex-1 h-48 image">
        <img class="w-full rounded rounded-lg flex-auto" :src="child.image" />
      </div>
      <div class="flex-1">
        <div class="flex flex-col h-48">
          <p class="flex p-2">{{ child.story | truncate(200) | capitalize }}</p>
          <div class="flex-auto">
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

<style lang="scss">
.curved {
  border-radius: 0px 30px 30px 30px;
}
.corner {
  position: absolute;
  bottom: 12px;
  right: 12px;
}
.shadow {
  box-shadow: 6px 9px 11px 0px rgba(0, 0, 0, 0.2) !important;
}
.bg-male {
  background-color: #50bde7 !important;

  &:before {
    border-right-color: #50bde7 !important;
  }
}
.bg-female {
  background-color: #de3680 !important;

  &:before {
    border-right-color: #de3680 !important;
  }
}
</style>

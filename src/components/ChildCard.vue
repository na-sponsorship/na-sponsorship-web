<template>
  <div class="border m-2 p-1 text-white w-64" :class="genderClass">
    <div class="flex flex-col content-start">
      <img width="0" class="w-full" :src="child.picture.url" />
      <div class="flex-none">
        <p class="antialiased p-2">
          {{ child.story | truncate(200) | capitalize }}
        </p>
      </div>
      <div class="flex-none">
        <div>
          <router-link
            class="btn btn-primary float-right"
            :to="{ name: 'sponsor', params: { id: child.id } }"
            >Learn More
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  computed: {
    genderClass() {
      return this.child.gender === "male" ? "bg-blue-500" : "bg-red-700";
    }
  },
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

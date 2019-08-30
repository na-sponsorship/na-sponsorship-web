<template>
  <div class="m-8 w-56 bg-white p-4 rounded rounded-lg shadow-2xl">
    <div class="flex flex-col content-start h-full">
      <div class="flex-1">
        <cld-image
          :publicId="child.image"
          class="rounded-lg w-full flex-auto h-full object-cover"
        >
          <cld-transformation
            width="250"
            height="350"
            gravity="face"
            crop="fill"
          />
        </cld-image>
      </div>
      <div class="flex-1">
        <div class="flex flex-col h-27-rem">
          <h3 class="ml-2 mt-5 text-2xl tracking-widest">
            {{ child.firstName }} {{ child.lastName }}
          </h3>
          <hr class="mx-2 bg-gray-300 h-px w-full" />
          <h3
            class="ml-2 uppercase text-xs font-bold tracking-widest"
            :class="genderStyle"
          >
            {{ child.gender }}, &nbsp;{{ age }}
          </h3>
          <p class="flex p-2 h-full story-fade overflow-hidden relative">
            {{ child.story | capitalize }}
          </p>
          <div class="flex-auto mt-2">
            <router-link
              class="btn btn-primary ml-2 text-2xl block text-center"
              :to="{ name: 'children.view', params: { id: child.id } }"
              >Sponsor</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { CldImage, CldTransformation } from "cloudinary-vue";

export default {
  components: { CldImage, CldTransformation },
  props: {
    child: {
      type: Object
    }
  },
  computed: {
    age() {
      return dayjs().diff(this.child.dateOfBirth, "years");
    },
    genderStyle() {
      let style = "";
      switch (this.child.gender) {
        case "female":
          style = "text-orange-500";
          break;
        case "male":
          style = "text-green-500";
          break;
      }

      return style;
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
.w-20-rem {
  width: 20rem;
}
.h-27-rem {
  height: 27rem;
}

.story-fade::after {
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 50%
  );
  height: 2rem;
}
</style>

<template>
  <div class="flex flex-col z-50">
    <div class="flex opacity-0 z-40">
      <div class="flex-1 bg-gray-600 w-full h-16"></div>
    </div>
    <div class="flex flex-row justify-center flex-no-wrap z-40 -mt-16">
      <div class="page-width-contraint flex items-center">
        <div class="w-56 p-2">
          <img :src="logoLight" />
        </div>
        <div class="flex-1">
          <div class="flex justify-end">
            <ul class="top-menu">
              <router-link
                :to="item.to"
                tag="li"
                v-for="(item, index) in menu"
                v-bind:key="index"
                exact-active-class="active"
              >
                <a href="#">{{ item.label }}</a>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.logo {
  width: 233px;
}
.top-menu {
  @apply flex;
  @apply list-none uppercase;
}

.top-menu li {
  @apply mr-5;
}

.top-menu a {
  @apply text-white;
  @apply no-underline text-xs font-semibold;
}

.top-menu li.active a {
  @apply text-yellow-500;
}
</style>

<script>
export default {
  data() {
    return {
      logoLight: require("@assets/img/logo/light@3x.png"),
      logoDark: require("@assets/img/logo/dark@3x.png"),
      isScrolling: false,
      menu: [
        { label: "Home", to: "/" },
        { label: "Sponsor a Child", to: "/sponsor" }
      ]
    };
  },
  methods: {
    updateScroll() {
      this.isScrolling = window.scrollY > 100;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>

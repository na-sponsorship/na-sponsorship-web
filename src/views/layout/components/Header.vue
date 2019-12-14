<template>
  <div class="flex flex-col absolute z-40 w-full">
    <div class="flex items-center justify-between md:w-3/4 md:m-auto">
      <router-link to="/"
        ><img class="w-3/4 md:w-56" :src="logoLight"
      /></router-link>
      <a
        class="text-white py-1 px-3 mr-1 rounded md:hidden"
        @click="showingMobileMenu = !showingMobileMenu"
      >
        <FAIcon icon="bars" />
      </a>
      <div>
        <ul
          class="top-menu items-center hidden lg:flex"
          :class="{ 'top-menu-alt': $route.name !== 'home' }"
        >
          <router-link
            :to="item.to"
            tag="li"
            v-for="(item, index) in menu"
            v-bind:key="index"
            exact-active-class="active"
          >
            <a href="#">{{ item.label }}</a>
          </router-link>
          <FeatureFlagged in="production">
            <router-link to="/login" tag="li">
              <button class="btn btn-primary px-8 py-2" href="#">
                Login
              </button>
            </router-link>
          </FeatureFlagged>
        </ul>
      </div>
    </div>
    <div class="flex flex-col" v-if="showingMobileMenu">
      <router-link
        class="bg-black text-orange-500 px-2 py-4"
        :to="item.to"
        v-for="(item, index) in menu"
        v-bind:key="index"
        exact-active-class="active"
        >{{ item.label }}</router-link
      >
    </div>
    <div class="flex flex-col md:justify-center z-40">
      <div class="flex items-center m-auto md:w-3/4">
        <div class="flex-1">
          <div class="flex items-center justify-end"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.top-menu {
  @apply list-none uppercase;
}

.top-menu li {
  @apply mr-5;
}

.top-menu a {
  @apply no-underline text-xs font-semibold;
  @apply text-white;
}

.top-menu li.active a {
  @apply text-orange-500;
}

.top-menu-alt a {
  @apply text-gray-400;
}
</style>

<script>
export default {
  data() {
    return {
      showingMobileMenu: false,
      logoLight: require("@assets/img/logo/light@3x.png"),
      isScrolling: false,
      menu: [
        { label: "Home", to: "/" },
        { label: "Sponsor a Child", to: "/children" },
        { label: "About", to: "/about" },
        { label: "Contact Us", to: "/contact" },
        { label: "Sign Up", to: "/create-password" }
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

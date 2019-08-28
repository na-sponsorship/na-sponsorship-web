<template>
  <div class="flex flex-col z-50">
    <div class="flex opacity-0 z-40">
      <div class="flex-1 bg-gray-600 w-full h-16"></div>
    </div>
    <div class="-mt-20 md:justify-center pt-3 z-40">
      <div class="flex items-center m-auto md:w-3/4">
        <div class="w-56 p-2">
          <router-link to="/">
            <img :src="logoLight" />
          </router-link>
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-end">
            <ul
              class="top-menu items-center hidden md:flex"
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
            <a
              href=""
              class="text-white border-white border py-1 px-2 mx-5 rounded md:hidden"
            >
              <FAIcon :icon="['fas', 'bars']" />
            </a>
          </div>
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
      logoLight: require("@assets/img/logo/light@3x.png"),
      isScrolling: false,
      menu: [
        { label: "Home", to: "/" },
        { label: "Sponsor a Child", to: "/children" },
        { label: "About", to: "/about" },
        { label: "Contact Us", to: "/contact" }
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

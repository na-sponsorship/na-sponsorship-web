<template lang="pug">
  div.flex.justify-center.bg-grey-darker.opacity-75.flex-no-wrap
    div.page-width-contraint
      div.w-64
        img.logo(:src="logoDark" v-if="!isScrolling")
      div.flex-1
        div.flex.justify-end
          ul.top-menu
            router-link(v-for="item in menu" :to="item.to" tag="li" active-class="active")
              a(href="#") {{item.label}}
</template>

<style lang="postcss">
.logo {
  width: 233px;
}
.top-menu {
  @apply flex;
  @apply list-reset uppercase;
}

.top-menu li {
  @apply mr-5
}

.top-menu a {
  @apply text-white;
  @apply  no-underline text-xs font-semibold;
}

.top-menu li.active a {
  @apply text-yellow-dark; 
}
</style>

<script>
export default {
  data() {
    return {
      logoLight: require("@assets/img/light@3x.png"),
      logoDark: require("@assets/img/dark@3x.png"),
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
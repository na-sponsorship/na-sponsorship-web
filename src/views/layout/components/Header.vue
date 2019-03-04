<template lang="pug">
header.u-header.u-header--sticky-top
  div.g-py-12(:class="{'light-theme': !isScrolling, 'dark-theme g-bg-white u-shadow-v27': isScrolling}")
    nav.navbar.navbar-expand-lg.g-py-0
      div.container.g-pos-rel
        a.js-go-to.navbar-brand.u-header__logo
          img.g-width-220(:src="logoLight" v-if="!isScrolling")
          img.g-width-220(:src="logoDark" v-if="isScrolling")
        div.collapse.navbar-collapse.align-items-center.flex-sm-row
          ul.navbar-nav.text-uppercase.g-font-weight-700.g-font-size-12.g-pt-20.g-pt-7--lg.ml-auto
            router-link.nav-item.g-mx-10--lg.g-mb-7.g-mb-0--lg(v-for="item in menu" :to="item.to" exact-active-class="active" tag="li"): a.nav-link.p-0 {{item.label}}
</template>

<script>
export default {
  data() {
    return {
      logoLight: require("@assets/img/light@3x.png"),
      logoDark: require("@assets/img/dark@3x.png"),
      isScrolling: false,
      menu: [
        { label: "Home", to: "/" },
        { label: "Sponsor a Child", to: "/sponsor" },
        { label: "Learn More", to: "/leanMore" },
        { label: "Account", to: "/account" }
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

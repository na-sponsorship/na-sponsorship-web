<template>
  <div class="flex justify-center bg-grey-darker opacity-75 flex-no-wrap">
   <div class="page-width-contraint">
     <div class="w-64">
       <img :src="logoDark"/>
     </div>
     <div class="flex-1">
       <div class="flex justify-end">
         <ul class="top-menu">
           <router-link :to="item.to" tag="li" v-for="(item, index) in menu" v-bind:key="index" active-class="active">
            <a href="#">{{item.label}}</a>
           </router-link>
         </ul>
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
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/pages/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/children",
      name: "children",
      component: () =>
        import(/* webpackChunkName: "sponsor-list" */ "./views/pages/children/ChildrenList.view.vue")
    },
    {
      path: "/children/:id",
      name: "children.view",
      component: () =>
        import(/* webpackChunkName: "child-sponsor-view" */ "./views/pages/children/ChildSponsor.view.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "login-view" */ "./views/pages/Login.view.vue")
    },
    {
      path: "/account",
      name: "account",
      component: () =>
        import(/* webpackChunkName: "login-view" */ "./views/pages/Account.view.vue")
    }
  ]
});

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes: [{
            path: "/",
            name: "home",
            component: () =>
                import ( /* webpackChunkName: "home" */ "./views/pages/Home.view.vue")
        },
        {
            path: "/children",
            name: "children",
            query: {
                page: 1
            },
            component: () =>
                import ( /* webpackChunkName: "sponsor-list" */ "./views/pages/children/ChildrenList.view.vue")
        },
        {
            path: "/children/:id",
            name: "children.view",
            component: () =>
                import ( /* webpackChunkName: "child-sponsor-view" */ "./views/pages/children/ChildSponsor.view.vue")
        },
        {
            path: "/login",
            name: "login",
            component: () =>
                import ( /* webpackChunkName: "login-view" */ "./views/pages/Login.view.vue")
        },
        {
            path: "/account",
            name: "account",
            component: () =>
                import ( /* webpackChunkName: "account-view" */ "./views/pages/Account.view.vue")
        },
        {
            path: "/about",
            name: "about",
            component: () =>
                import ( /* webpackChunkName: "home" */ "./views/pages/About.view.vue")
        },
        {
            path: "/contact",
            name: "contact",
            component: () =>
                import ( /* webpackChunkName: "home" */ "./views/pages/Contact.view.vue")
        }
    ]
});
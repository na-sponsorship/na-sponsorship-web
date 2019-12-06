import Vue from "vue";
import Vue2Filters from "vue2-filters";
import VueFilterDateFormat from "vue-filter-date-format";
import VTooltip from "v-tooltip";
import VueNumeric from "vue-numeric";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import Cloudinary from "cloudinary-vue";
import { VueReCaptcha } from "vue-recaptcha-v3";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import "./logrocket";

import "@assets/css/style.css";
import "./icons";
import "./validation";

import FeatureFlagged from "./components/FeatureFlagged";

Vue.component("FAIcon", FontAwesomeIcon);
Vue.component("FeatureFlagged", FeatureFlagged);

import App from "./App.vue";
import router from "./router";
import store from "./store";
import StripePlugin from "./plugins/stripe.plugin";

Vue.config.productionTip = false;

Vue.use(Vue2Filters);
Vue.use(StripePlugin);
Vue.use(VueFilterDateFormat);
Vue.use(VTooltip);
Vue.use(VueNumeric);
Vue.use(Cloudinary, {
    configuration: {
        cloudName: process.env.VUE_APP_CLAUDINARY_CLOUD_NAME,
    }
});
Vue.use(VueReCaptcha, {
    siteKey: process.env.VUE_APP_RECAPTCHA_SITE_ID,
    loaderOptions: {
        autoHideBadge: true,
    },
});

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
import Vue from "vue";
import Vue2Filters from "vue2-filters";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faUser,
  faGift,
  faCheckCircle,
  faCaretRight
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "@assets/css/style.css";
library.add(
  faFacebookF,
  faTwitter,
  faYoutube,
  faTimes,
  faUser,
  faGift,
  faCheckCircle,
  faCaretRight
);

Vue.component("FAIcon", FontAwesomeIcon);

import App from "./App.vue";
import router from "./router";
import store from "./store";
import StripePlugin from "./plugins/stripe.plugin";

Vue.config.productionTip = false;

Vue.use(Vue2Filters);
Vue.use(StripePlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

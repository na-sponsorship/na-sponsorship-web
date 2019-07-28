import Vue from "vue";
import Vue2Filters from "vue2-filters";
import VueFilterDateFormat from "vue-filter-date-format";
import VTooltip from "v-tooltip";
import Vuelidate from "vuelidate";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faUser,
  faGift,
  faCheckCircle,
  faCaretRight,
  faCaretLeft,
  faDollarSign,
  faQuestionCircle,
  faShieldAlt,
  faLongArrowAltLeft,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "@assets/css/style.css";
library.add(
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
  faTimes,
  faUser,
  faGift,
  faCheckCircle,
  faCaretRight,
  faCaretLeft,
  faDollarSign,
  faQuestionCircle,
  faShieldAlt,
  faLongArrowAltLeft,
  faPhone,
  faEnvelope
);
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
Vue.use(Vuelidate);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

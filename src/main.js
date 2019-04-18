import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import Vue2Filters from "vue2-filters";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faFacebookF, faTwitter, faYoutube);

Vue.component("FAIcon", FontAwesomeIcon);

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(Vue2Filters);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

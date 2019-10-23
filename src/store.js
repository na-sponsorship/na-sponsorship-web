import Vue from "vue";
import Vuex from "vuex";
import createPlugin from "logrocket-vuex";
import LogRocket from "logrocket";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  plugins: [createPlugin(LogRocket)],
});

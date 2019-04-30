export default {
  install: function(Vue) {
    // eslint-disable-next-line no-undef
    Vue.prototype.$Stripe = Stripe("pk_test_mfy4zDBPu3OS6oncnfbjh6ta");
  }
};

export default {
  install: function(Vue) {
    // eslint-disable-next-line no-undef
    Vue.prototype.$Stripe = Stripe(process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY);
  }
};

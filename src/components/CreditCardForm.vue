<template>
  <form id="credit-card-payment-form">
    <div class="flex-col">
      <div class="flex">
        <div id="card-number" class="flex-1 stripe-field"></div>
      </div>
      <div class="flex">
        <div id="card-expiration" class="flex-1 mr-2 stripe-field"></div>
        <div id="card-cvc" class="flex-1 stripe-field"></div>
      </div>
    </div>
    <div class="form-control">
      <div id="card-errors" role="alert"></div>
    </div>
  </form>
</template>

<style lang="postcss" scoped>
#credit-card-payment-form {
  .stripe-field {
    @apply border border-gray-400 rounded-lg py-3 px-2 my-2 bg-white;
  }
}
</style>

<script>
let card, expiration, cvc;

export default {
  mounted() {
    const elements = this.$Stripe.elements();

    var style = {
      base: {
        fontSize: "16px",
        color: "#32325d"
      }
    };

    card = elements.create("cardNumber", { style });
    expiration = elements.create("cardExpiry", { style });
    cvc = elements.create("cardCvc", { style });

    card.mount("#card-number");
    expiration.mount("#card-expiration");
    cvc.mount("#card-cvc");
  },
  methods: {
    submit() {
      this.$Stripe.createToken(card).then(data => {
        if (data.error) {
          return;
        }

        this.$emit("ontoken", data.token.id);
        // send token to server
      });
    }
  }
};
</script>

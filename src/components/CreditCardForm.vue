<template>
  <form id="credit-card-payment-form">
    <div class="flex-col">
      <div class="flex flex-col">
        <div id="card-number" class="flex-1 stripe-field"></div>
        <div class="text-red-500 font-medium">
          {{ cardError }}
        </div>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col flex-1">
          <div id="card-expiration" class="stripe-field md:mr-2"></div>
          <div class="text-red-500 font-medium">
            {{ expirationError }}
          </div>
        </div>
        <div class="flex flex-col flex-1">
          <div id="card-cvc" class="stripe-field"></div>
          <div class="text-red-500 font-medium">
            {{ cvcError }}
          </div>
        </div>
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
    @apply border border-gray-400 rounded-lg py-3 px-2 mt-3 bg-white;

    &.StripeElement--invalid {
      @apply border-red-500 border-2;
    }

    &.StripeElement--complete {
      @apply border-green-500 border-2;
    }
  }
}
</style>

<script>
let card, expiration, cvc;

export default {
  data() {
    return {
      cardError: "",
      expirationError: "",
      cvcError: ""
    };
  },
  mounted() {
    const elements = this.$Stripe.elements();

    var style = {
      base: {
        fontSize: "16px",
        fontFamily: "sans-serif",
        fontWeight: "400",
        fontSmoothing: "antialiased",
        color: "#32325d",
        "::placeholder": {
          color: "#a0aec0"
        }
      },
      invalid: {
        color: "black"
      }
    };

    card = elements
      .create("cardNumber", {
        style,
        placeholder: "Card Number"
      })
      .addEventListener("change", event => {
        this.cardError = event.error ? event.error.message : "";
      });

    expiration = elements
      .create("cardExpiry", {
        style,
        placeholder: "Expiration Date"
      })
      .addEventListener("change", event => {
        this.expirationError = event.error ? event.error.message : "";
      });

    cvc = elements
      .create("cardCvc", { style })
      .addEventListener("change", event => {
        this.cvcError = event.error ? event.error.message : "";
      });

    card.mount("#card-number");
    expiration.mount("#card-expiration");
    cvc.mount("#card-cvc");
  },
  methods: {
    async getToken() {
      return await this.$Stripe.createToken(card).then(data => {
        if (data.error) {
          return;
        }

        return data.token.id;
      });
    }
  }
};
</script>

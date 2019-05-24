<template>
  <form id="credit-card-payment-form">
    <div class="form-control">
      <label for="card-element">
        Credit or debit card
      </label>
      <div id="card-element"></div>

      <div id="card-errors" role="alert"></div>
    </div>
    <button type="button" class="btn-primary" @click.prevent="submit()">
      Validate Cards
    </button>
  </form>
</template>

<script>
let card;

export default {
  mounted() {
    const elements = this.$Stripe.elements();

    var style = {
      base: {
        fontSize: "16px",
        color: "#32325d"
      }
    };

    card = elements.create("card", { style });
    card.mount("#card-element");
  },
  methods: {
    submit() {
      this.$Stripe
        .createToken(card)
        .then(data => {
          if (data.error) {
            console.log(data.error);
            return;
          }

          this.$emit("ontoken", data.token.id);
          // send token to server
        })
        .catch(err => {
          debugger;
          console.log(err);
        });
    }
  }
};
</script>

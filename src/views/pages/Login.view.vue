<template>
  <div class="flex justify-center mb-10 mt-10">
    <div class="page-width-contraint flex-col shadow-lg p-3">
      <div class="">
        <h1 class="font-medium text-4xl">Secure Donation</h1>
        <p class="text-lg mb-4">
          Enter your email address to receive your security code.
        </p>
      </div>
      <div class="flex" v-if="!codeRequested">
        <div>
          <input
            class="w-full py-2 px-20 border rounded w-full"
            type="text"
            v-model="data.email"
          />
        </div>
        <div class="flex">
          <button
            class="bg btn-primary border rounded w-full py-2 px-3 mb-2"
            @click="getCode(data.email)"
          >
            GET CODE
          </button>
        </div>
      </div>
      <div class="flex" v-if="codeRequested">
        <pre>Show code requested fields</pre>
      </div>
    </div>
  </div>
</template>

<style lang="postcss"></style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: {
        email: null
      },
      codeRequested: false
    };
  },
  methods: {
    getCode(email) {
      axios.post(`${process.env.VUE_APP_API}/getCode`, { email }).then(() => {
        this.codeRequested = true;
      });
    }
  }
};
</script>

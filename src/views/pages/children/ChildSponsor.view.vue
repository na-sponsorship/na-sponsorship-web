<template>
  <div>
    <hero :header-bg="bgImage"></hero>
    <div class="flex justify-center">
      <div class="page-width-contraint z-10" v-if="child">
        <div class="flex shadow-lg -mt-64 bg-white rounded-lg p-3">
          <div class="flex-initial w-1/4 h-auto">
            <img
              class="rounded-lg flex-auto h-full w-full object-cover"
              :src="child.image"
            />
          </div>
          <div class="flex-1 p-2">
            <div class="flex flex-col">
              <div class="px-5">
                <h2 class="text-4xl font-bold text-gray-700">
                  {{ child.firstName | lowercase | capitalize }}
                  {{ child.lastName | lowercase | capitalize }}
                </h2>
                <hr class="border border-gray-200" />
                <p class="text-gray-700 pb-5 text-indent">
                  {{ child.story | capitalize({ onlyFirstLetter: true }) }}
                </p>
                <span class="block uppercase font-semibold text-gray-700 py-1"
                  >Age: {{ child.dateOfBirth }}</span
                >
                <span class="block uppercase font-semibold text-gray-700 py-1"
                  >Gender: {{ child.gender }}</span
                >
                <span class="block uppercase font-semibold text-gray-700 py-1"
                  >Grade: {{ child.grade }}</span
                >
                <button class="btn-lg btn-primary my-5 px-12">
                  Sponsor Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col my-5">
          <div class="flex flex-col px-16 bg-gray-200 rounded-lg shadow-2xl">
            <span class="text-green-600 text-4xl font-bold my-3"
              >Sponsor Child</span
            >
            <span class="uppercase text-sm my-4 font-bold text-gray-700"
              >Your Information</span
            >
            <div class="flex mb-3">
              <div class="flex-1 mr-2">
                <input
                  class="form-input w-full"
                  v-model="sponsor.firstName"
                  placeholder="First Name"
                />
              </div>
              <div class="flex-1">
                <input
                  class="form-input w-full"
                  v-model="sponsor.lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="flex mb-3">
              <div class="flex-1">
                <input
                  class="form-input w-full"
                  v-model="sponsor.email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="flex mb-3">
              <div class="flex-1">
                <input
                  class="form-input w-full"
                  v-model="sponsor.address.line1"
                  placeholder="Address"
                />
              </div>
            </div>
            <div class="flex mb-3">
              <div class="flex-1 mr-2">
                <input
                  class="form-input w-full"
                  v-model="sponsor.address.city"
                  placeholder="City"
                />
              </div>
              <div class="flex-1 mr-2">
                <select class="form-select" v-model="sponsor.address.state">
                  <option
                    v-for="(state_code, state_name) in states"
                    :value="state_code"
                    :key="state_code"
                    >{{ state_name | lowercase | capitalize }}</option
                  >
                </select>
              </div>
              <div class="flex-1">
                <input
                  class="form-input w-full"
                  v-model="sponsor.address.postal_code"
                  placeholder="Zip Code"
                />
              </div>
            </div>
            <div class="flex my-5">
              <div class="bg-green-400 p-2 rounded-lg text-white text-xl">
                <FAIcon class="mx-1" :icon="['fas', 'dollar-sign']" />
                <span v-if="!oneTimeDonation">35.00/month</span>
                <input
                  v-if="oneTimeDonation"
                  class="form-input rounded-l-none text-black"
                  placeholder="Donation Amount"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <label class="inline-flex items-center mb-3">
                <input
                  class="form-checkbox"
                  type="checkbox"
                  v-model="oneTimeDonation"
                />
                <span class="ml-3 text-gray-800 font-medium"
                  >Make One-Time donation instead</span
                >
              </label>
              <label class="inline-flex items-center">
                <input
                  class="form-checkbox"
                  type="checkbox"
                  v-model="sponsor.payment.extraMonthly"
                />
                <span class="ml-3 text-gray-800 font-medium cursor-pointer">
                  Add extra $5.00 to the general children's fund?
                  <FAIcon class="mx-1" :icon="['fas', 'question-circle']" />
                </span>
              </label>
            </div>
            <span class="uppercase text-sm my-5 font-bold text-gray-700"
              >Payment Information</span
            >
            <div class="flex">
              <div class="flex-1">
                <label class="inline-flex items-center">
                  <input
                    class="form-radio"
                    type="radio"
                    value="true"
                    v-model="selectedPaymentMethod"
                  />
                  <span class="ml-2 text-gray-800">Credit Card</span>
                </label>
              </div>
            </div>
            <CrediCardForm @ontoken="setToken"></CrediCardForm>
            <div class="flex my-3">
              <div class="flex-1 text-gray-200 mt-2">
                <span class="rounded-l-lg bg-green-500 p-2"
                  >Donation total:</span
                >
                <span class="text-black ml-2">{{
                  (39.0 + (sponsor.payment.extraMonthly ? 5 : 0)) | currency
                }}</span>
              </div>
              <div class="flex-1 pt-2 text-right">
                <FAIcon
                  class="mx-1 text-green-600 text-lg"
                  :icon="['fas', 'shield-alt']"
                />
                <span class="text-gray-700">This is a secure SSL payment</span>
              </div>
            </div>
            <div class="flex mt-5 mb-3 pb-3">
              <button
                type="button"
                class="btn btn-primary mt-2 px-6 py-2 text-base"
                @click.prevent="startSponsorship(sponsor)"
              >
                {{ oneTimeDonation ? "Donate" : "Start Monthly Sponsorship" }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
import countries from "@src/helpers/countries.helper";
import states from "@src/helpers/states.helper";
import CrediCardForm from "@components/CreditCardForm";
import hero from "@components/Hero";

export default {
  components: { CrediCardForm, hero },
  data() {
    return {
      bgImage: require("@assets/img/headers/children.jpg"),
      countries: countries,
      states: states,
      paymentMethods: ["card", "ach"],
      selectedPaymentMethod: "true",
      child: null,
      oneTimeDonation: false,
      sponsor: {
        address: {
          line1: null,
          city: null,
          country: null,
          postal_code: null,
          state: -1
        },
        firstName: null,
        lastName: null,
        email: null,
        child_id: null,
        payment: {
          token: null,
          extraMonthly: false
        }
      }
    };
  },
  created() {
    axios
      .get(`${process.env.VUE_APP_API}/children/${this.$route.params.id}`)
      .then(child => {
        // var d = dayjs;
        // // Create date Objects
        // child.data.dateOfBirth = dayjs(child.data.dateOfBirth);
        this.child = child.data;
        this.sponsor.child_id = child.data.id;
      });
  },
  methods: {
    setToken(token) {
      this.sponsor.payment.token = token;
    },
    getAge(age) {
      return dayjs().diff(age, "years");
    },
    startSponsorship(sponsor) {
      axios.post(`${process.env.VUE_APP_API}/sponsorChild`, sponsor);
    }
  }
};
</script>

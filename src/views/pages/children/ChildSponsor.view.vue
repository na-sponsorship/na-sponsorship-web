<template>
  <div>
    <hero :header-bg="bgImage"></hero>
    <div class="flex m-auto md:w-3/4">
      <div class="z-10 m-auto" v-if="child">
        <div class="flex flex-col -mt-64 -mb-20">
          <div class="inline-flex mb-4 justify-center md:justify-end">
            <a
              @click="$router.go(-1)"
              class="w-full cursor-pointer text-white border border-gray-600 px-3 py-1 hover:bg-gray-700 tracking-widest font-bold md:rounded-lg md:w-auto"
            >
              <FAIcon icon="long-arrow-alt-left" />&nbsp; RETURN TO ALL CHILDREN
            </a>
          </div>
          <div
            class="flex flex-col shadow-lg bg-white p-3 md:rounded-lg md:flex-row"
          >
            <div class="flex-initial md:w-1/4 md:h-auto">
              <cld-image :publicId="child.image" class="rounded-lg w-full">
                <cld-transformation
                  width="250"
                  height="350"
                  gravity="face"
                  crop="fill"
                />
              </cld-image>
            </div>
            <div class="flex-1 p-2">
              <div class="flex flex-col">
                <div class="md:px-5">
                  <h2 class="text-5xl text-gray-700 font-cursive">
                    {{ child.firstName | lowercase | capitalize }}
                    {{ child.lastName | lowercase | capitalize }}
                  </h2>
                  <hr class="bg-gray-500 h-px" />
                  <p class="text-gray-700 pb-5 md:text-indent">
                    {{ child.story | capitalize({ onlyFirstLetter: true }) }}
                  </p>
                  <div class="font-bold uppercase tracking-widest">
                    <span class="block text-gray-700 py-1"
                      >Age: &nbsp;{{ age }}
                      {{ age | pluralize("year") }} old</span
                    >
                    <span class="block text-gray-700 py-1"
                      >Gender: &nbsp;{{ child.gender }}</span
                    >
                    <span class="block text-gray-700 py-1"
                      >Grade: &nbsp;{{ child.grade }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col my-5">
            <div
              class="flex flex-col px-5 bg-gray-200 rounded-lg shadow-2xl md:px-16"
            >
              <span class="text-green-600 text-4xl font-bold my-3"
                >Sponsor Child</span
              >
              <span class="uppercase text-sm my-4 font-bold text-gray-700"
                >Your Information</span
              >
              <div class="flex flex-col mb-3 md:flex-row">
                <div
                  class="flex-1 form-group mb-3 md:mb-0 md:mr-2"
                  :class="{
                    'has-error': $v.sponsor.firstName.$error,
                    'is-valid':
                      $v.sponsor.firstName.$dirty &&
                      !$v.sponsor.firstName.$invalid
                  }"
                >
                  <input
                    class="form-input w-full"
                    v-model="$v.sponsor.firstName.$model"
                    placeholder="First Name"
                  />
                  <div
                    class="error"
                    v-if="
                      !$v.sponsor.firstName.required &&
                        $v.sponsor.firstName.$dirty
                    "
                  >
                    Please enter a first name
                  </div>
                </div>
                <div
                  class="flex-1 form-group"
                  :class="{
                    'has-error': $v.sponsor.lastName.$error,
                    'is-valid':
                      $v.sponsor.lastName.$dirty &&
                      !$v.sponsor.lastName.$invalid
                  }"
                >
                  <input
                    class="form-input w-full"
                    v-model="$v.sponsor.lastName.$model"
                    placeholder="Last Name"
                  />
                  <div
                    class="error"
                    v-if="
                      !$v.sponsor.lastName.required &&
                        $v.sponsor.lastName.$dirty
                    "
                  >
                    Please enter a last name
                  </div>
                </div>
              </div>
              <div class="flex mb-3">
                <div
                  class="flex-1 form-group"
                  :class="{
                    'has-error': $v.sponsor.email.$error,
                    'is-valid':
                      $v.sponsor.email.$dirty && !$v.sponsor.email.$invalid
                  }"
                >
                  <input
                    class="form-input w-full"
                    v-model="$v.sponsor.email.$model"
                    placeholder="Email"
                  />
                  <div
                    class="error"
                    v-if="!$v.sponsor.email.required && $v.sponsor.email.$dirty"
                  >
                    Please enter an email
                  </div>
                  <div class="error" v-if="!$v.sponsor.email.email">
                    Please enter a valid email address
                  </div>
                </div>
              </div>
              <div class="flex mb-3">
                <div
                  class="flex-1 form-group"
                  :class="{
                    'has-error': $v.sponsor.address.line1.$error,
                    'is-valid':
                      $v.sponsor.address.line1.$dirty &&
                      !$v.sponsor.address.line1.$invalid
                  }"
                >
                  <input
                    class="form-input w-full"
                    v-model="$v.sponsor.address.line1.$model"
                    placeholder="Address"
                  />
                  <div
                    class="error"
                    v-if="
                      !$v.sponsor.address.line1.required &&
                        $v.sponsor.address.line1.$dirty
                    "
                  >
                    Please enter an address
                  </div>
                </div>
              </div>
              <div class="flex flex-col mb-3 md:flex-row">
                <div
                  class="flex-1 form-group mb-3 md:mr-2 md:mb-0"
                  :class="{
                    'has-error': $v.sponsor.address.city.$error,
                    'is-valid':
                      $v.sponsor.address.city.$dirty &&
                      !$v.sponsor.address.city.$invalid
                  }"
                >
                  <input
                    class="form-input w-full"
                    v-model="sponsor.address.city"
                    placeholder="City"
                  />
                  <div
                    class="error"
                    v-if="
                      !$v.sponsor.address.city.required &&
                        $v.sponsor.address.city.$dirty
                    "
                  >
                    Please enter a city
                  </div>
                </div>
                <div
                  class="flex-1 form-group mb-3 md:mr-2 md:mb-0"
                  :class="{
                    'has-error': $v.sponsor.address.state.$error,
                    'is-valid':
                      $v.sponsor.address.state.$dirty &&
                      !$v.sponsor.address.state.$invalid
                  }"
                >
                  <select
                    class="form-select w-full"
                    v-model="sponsor.address.state"
                  >
                    <option
                      v-for="(state_code, state_name) in states"
                      :value="state_code"
                      :key="state_code"
                      >{{ state_name | lowercase | capitalize }}</option
                    >
                  </select>
                  <div
                    class="error"
                    v-if="
                      !$v.sponsor.address.state.mustHaveSelection &&
                        $v.sponsor.address.state.$dirty
                    "
                  >
                    Please select a state
                  </div>
                </div>
                <div
                  class="flex-1 form-group"
                  :class="{
                    'has-error': $v.sponsor.address.postal_code.$error,
                    'is-valid':
                      $v.sponsor.address.postal_code.$dirty &&
                      !$v.sponsor.address.postal_code.$invalid
                  }"
                >
                  <input
                    class="form-input w-full"
                    v-model="sponsor.address.postal_code"
                    placeholder="Zip Code"
                  />

                  <div
                    class="error"
                    v-if="
                      !$v.sponsor.address.postal_code.required &&
                        $v.sponsor.address.postal_code.$dirty
                    "
                  >
                    Please enter a zip code
                  </div>
                </div>
              </div>
              <div
                class="flex flex-col mt-4 items-start md:items-center md:flex-row"
              >
                <label
                  class="bg-green-500 inline-flex items-center px-4 py-2 cursor-pointer w-full md:w-auto md:rounded-full"
                >
                  <input
                    class="form-radio cursor-pointer"
                    name="donationFrequency"
                    type="radio"
                    value="recurring"
                    v-model="payment.type"
                  />
                  <span class="ml-2 text-gray-200 uppercase font-semibold"
                    >Give $39.00 Monthly</span
                  >
                </label>
                <span
                  class="text-gray-700 font-bold my-2 w-full text-center md:px-5 md:w-auto"
                  >OR</span
                >
                <label
                  class="bg-green-500 inline-flex items-center px-4 py-2 z-0 cursor-pointer w-full md:rounded-full md:w-auto"
                >
                  <input
                    class="form-radio cursor-pointer"
                    type="radio"
                    v-model="payment.type"
                    value="single"
                    name="donationFrequency"
                  />
                  <span class="font-semibold ml-2 text-gray-200 uppercase"
                    >One Time<span class="hidden md:inline">:</span></span
                  >
                </label>
                <vue-numeric
                  class="focus:border-gray-400 focus:outline-none focus:shadow-none form-input pl-10 py-3 rounded-none w-full md:w-auto md:rounded-r-full md:-ml-8 md:w-1/3"
                  @focus="payment.type = 'single'"
                  currency="$"
                  separator=","
                  :min="1"
                  :max="1000"
                  maxlength="4"
                  v-model="payment.singleDonationAmount"
                  placeholder="Enter a one time donation"
                ></vue-numeric>
              </div>
              <hr class="bg-gray-400 h-px mt-6 w-full" />
              <span class="font-bold mb-2 mt-3 text-gray-700 text-sm uppercase"
                >Payment Information</span
              >
              <CrediCardForm ref="stripeForm"></CrediCardForm>
              <div class="flex-1 mb-6 mt-2">
                <FAIcon class="mx-1 text-green-600 text-lg" icon="shield-alt" />
                <span class="text-gray-700">This is a secure SSL payment</span>
              </div>
              <div class="flex flex-col items-center md:flex-row">
                <label class="inline-flex items-center">
                  <input
                    class="form-checkbox"
                    type="checkbox"
                    v-model="payment.extraAmount"
                  />
                  <span class="ml-3 text-gray-800 font-medium cursor-pointer">
                    Add extra $5.00 to the general children's fund
                  </span>
                </label>
                <FAIcon
                  v-tooltip="'This amount will support the ministry as a whole'"
                  class="hidden mx-2 cursor-pointer md:block"
                  icon="question-circle"
                />
                <div
                  class="flex flex-col mt-4 text-gray-800 bg-gray-300 border-2 border-gray-500 rounded-lg md:hidden"
                >
                  <FAIcon
                    class="text-2xl text-gray-500"
                    style="margin-top: -17px; margin-left: 6px;"
                    icon="caret-up"
                  />
                  <span class="p-1"
                    >This amount will support the ministry as a whole</span
                  >
                </div>
              </div>
              <hr class="bg-gray-400 h-px my-8 w-full" />
              <div class="flex flex-col mb-12 md:flex-row justify-between">
                <div
                  class="my-2 text-center uppercase font-bold text-orange-500 text-2xl md:text-4xl md:my-0"
                >
                  <span class="uppercase">Donation total:</span>
                  <span class="pl-2 md:px-4">{{
                    totalDonation | currency
                  }}</span>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-primary mt-2 px-6 py-10 text-base w-full md:w-auto md:py-2"
                    :disabled="isSponsoringPending"
                    @click.prevent="startSponsorship(sponsor)"
                  >
                    {{ payment.type === "single" ? "Give" : "Give Monthly" }}
                    Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isSponsorshipSuccessfull">
      <div
        class="fixed flex h-screen top-0 w-screen z-20 bg-black opacity-75"
      ></div>
      <div
        class="fixed flex h-screen items-center justify-around top-0 w-screen z-30"
      >
        <div
          class="flex flex-col items-center bg-white w-4/5 rounded-lg p-3 md:w-3/5"
        >
          <h2 class="text-2xl">Sponsorship Successfull</h2>
          <FAIcon icon="check-circle" class="text-4xl text-green-500 my-2" />
          <div class="my-2 text-center">
            Your are now sponsoring
            <span class="font-bold italic capitalize">{{
              child.firstName
            }}</span>
            for
            <span class="font-bold ">{{ totalDonation | currency }}</span> per
            month starting today and reapeating every month until stopped.
          </div>
          <span class="my-2 text-center"
            >We sent an email confirmation to
            <span class="font-bold italic">{{ sponsor.email }}</span></span
          >
          <button
            class="btn btn-primary btn-lg py-2 my-2"
            @click="isSponsorshipSuccessfull = false"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
import { isUndefined } from "lodash";
import { required, email } from "vuelidate/lib/validators";
import { CldImage, CldTransformation } from "cloudinary-vue";

import CrediCardForm from "@components/CreditCardForm";
import hero from "@components/Hero";

export default {
  components: { CldImage, CrediCardForm, CldTransformation, hero },
  validations: {
    sponsor: {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      address: {
        line1: { required },
        city: { required },
        postal_code: { required },
        state: { mustHaveSelection: value => value !== -1 }
      }
    }
  },
  computed: {
    age() {
      return dayjs().diff(this.child.dateOfBirth, "years");
    },
    totalDonation() {
      let total = 0;
      const extraAmount = this.payment.extraAmount ? 5 : 0;

      if (this.payment.type === "single") {
        total = parseFloat(this.payment.singleDonationAmount) + extraAmount;
      } else {
        total = 39.0 + extraAmount;
      }

      return total;
    }
  },
  data() {
    return {
      isSponsoringPending: false,
      isSponsorshipSuccessfull: false,
      bgImage: require("@assets/img/headers/children.jpg"),
      countries: require("@src/helpers/countries.helper").default,
      states: require("@src/helpers/states.helper").default,
      paymentMethods: ["card", "ach"],
      selectedPaymentMethod: "true",
      child: null,
      sponsor: {
        firstName: null,
        lastName: null,
        email: null,
        address: {
          line1: null,
          city: null,
          postal_code: null,
          state: -1
        }
      },
      payment: {
        type: "recurring",
        singleDonationAmount: 0,
        stripeToken: null,
        extraAmount: false
      }
    };
  },
  async created() {
    const { data } = await axios.get(
      `${process.env.VUE_APP_API}/children/${this.$route.params.id}`
    );

    this.child = data;
  },
  methods: {
    async startSponsorship(sponsor) {
      this.$v.$touch();
      this.payment.stripeToken = await this.$refs.stripeForm.getToken();

      const paymentInvalid = isUndefined(this.payment.stripeToken);

      if (!this.$v.$invalid && !paymentInvalid) {
        this.isSponsoringPending = true;

        await axios.post(`${process.env.VUE_APP_API}/sponsors`, {
          childId: this.child.id,
          sponsor,
          payment: this.payment
        });

        this.isSponsoringPending = false;
        this.isSponsorshipSuccessfull = true;
      }
    }
  }
};
</script>

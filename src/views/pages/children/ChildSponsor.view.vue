<template>
  <div>
    <hero :header-bg="bgImage"></hero>
    <div class="flex justify-center">
      <div class="page-width-constraint z-10" v-if="child">
        <div class="flex flex-col -mt-64 -mb-20">
          <div class="text-right mb-4">
            <a
              @click="$router.go(-1)"
              class="cursor-pointer text-white border border-gray-600 rounded-lg px-3 py-1 hover:bg-gray-700 tracking-widest font-bold"
            >
              <FAIcon :icon="['fas', 'long-arrow-alt-left']" />&nbsp; RETURN TO
              ALL CHILDREN
            </a>
          </div>
          <div class="flex shadow-lg bg-white rounded-lg p-3">
            <div class="flex-initial w-1/4 h-auto">
              <img
                class="rounded-lg flex-auto h-full w-full object-cover"
                :src="child.image"
              />
            </div>
            <div class="flex-1 p-2">
              <div class="flex flex-col">
                <div class="px-5">
                  <h2 class="text-5xl text-gray-700 font-cursive">
                    {{ child.firstName | lowercase | capitalize }}
                    {{ child.lastName | lowercase | capitalize }}
                  </h2>
                  <hr class="bg-gray-500 h-px" />
                  <p class="text-gray-700 pb-5 text-indent">
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
            <div class="flex flex-col px-16 bg-gray-200 rounded-lg shadow-2xl">
              <span class="text-green-600 text-4xl font-bold my-3"
                >Sponsor Child</span
              >
              <span class="uppercase text-sm my-4 font-bold text-gray-700"
                >Your Information</span
              >
              <div class="flex mb-3">
                <div
                  class="flex-1 mr-2 form-group"
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
              <div class="flex mb-3">
                <div
                  class="flex-1 mr-2 form-group"
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
                  class="flex-1 mr-2 form-group"
                  :class="{
                    'has-error': $v.sponsor.address.state.$error,
                    'is-valid':
                      $v.sponsor.address.state.$dirty &&
                      !$v.sponsor.address.state.$invalid
                  }"
                >
                  <select class="form-select" v-model="sponsor.address.state">
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
              <div class="flex mt-4 items-center">
                <label
                  class="bg-green-500 inline-flex items-center px-4 py-2 rounded-full cursor-pointer"
                >
                  <input
                    class="form-radio cursor-pointer"
                    name="donationFrequency"
                    type="radio"
                    value="recurring"
                    v-model="oneTimeDonation"
                  />
                  <span class="ml-2 text-gray-200 uppercase font-semibold"
                    >Give $39.00 Monthly</span
                  >
                </label>
                <span class="px-5 text-gray-700 font-bold">OR</span>
                <label
                  class="bg-green-500 inline-flex items-center px-4 py-2 rounded-full z-0 cursor-pointer"
                >
                  <input
                    class="form-radio cursor-pointer"
                    type="radio"
                    v-model="oneTimeDonation"
                    value="single"
                    name="donationFrequency"
                  />
                  <span class="font-semibold ml-2 text-gray-200 uppercase"
                    >One Time:</span
                  >
                </label>
                <input
                  class="-ml-8 focus:border-gray-400 focus:outline-none focus:shadow-none form-input pl-10 py-3 w-1/3 rounded-r-full"
                  @focus="oneTimeDonation = 'single'"
                  type="number"
                  placeholder="Enter a one time donation"
                />
              </div>
              <hr class="bg-gray-400 h-px mt-6 w-full" />
              <span class="font-bold mb-2 mt-3 text-gray-700 text-sm uppercase"
                >Payment Information</span
              >
              <CrediCardForm @ontoken="setToken"></CrediCardForm>
              <div class="flex-1 mb-6 mt-2">
                <FAIcon
                  class="mx-1 text-green-600 text-lg"
                  :icon="['fas', 'shield-alt']"
                />
                <span class="text-gray-700">This is a secure SSL payment</span>
              </div>
              <div class="flex items-center">
                <label class="inline-flex items-center">
                  <input
                    class="form-checkbox"
                    type="checkbox"
                    v-model="sponsor.payment.extraMonthly"
                  />
                  <span class="ml-3 text-gray-800 font-medium cursor-pointer">
                    Add extra $5.00 to the general children's fund
                  </span>
                </label>
                <FAIcon
                  v-tooltip="'This amount will support the ministry as a whole'"
                  class="mx-2 cursor-pointer"
                  :icon="['fas', 'question-circle']"
                />
              </div>
              <hr class="bg-gray-400 h-px my-8 w-full" />
              <div class="flex mb-12">
                <div class="flex-auto uppercase">
                  <span class="font-bold text-4xl text-orange-500"
                    >Donation total:
                    {{
                      (39.0 + (sponsor.payment.extraMonthly ? 5 : 0)) | currency
                    }}</span
                  >
                </div>
                <div class="flex-1">
                  <button
                    type="button"
                    class="btn btn-primary mt-2 px-6 py-2 text-base float-right"
                    @click.prevent="startSponsorship(sponsor)"
                  >
                    {{ oneTimeDonation === "single" ? "Give" : "Give Monthly" }}
                    Now
                  </button>
                </div>
              </div>
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
import { required, email } from "vuelidate/lib/validators";

export default {
  components: { CrediCardForm, hero },
  validations: {
    sponsor: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      email: {
        required,
        email
      },
      address: {
        line1: {
          required
        },
        city: {
          required
        },
        postal_code: {
          required
        },
        state: {
          mustHaveSelection: value => value !== -1
        }
      }
    }
  },
  data() {
    return {
      bgImage: require("@assets/img/headers/children.jpg"),
      countries: countries,
      states: states,
      paymentMethods: ["card", "ach"],
      selectedPaymentMethod: "true",
      child: null,
      oneTimeDonation: "recurring",
      sponsor: {
        address: {
          line1: null,
          city: null,
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
        this.child = child.data;
        this.sponsor.child_id = child.data.id;
      });
  },
  computed: {
    age() {
      return dayjs().diff(this.child.dateOfBirth, "years");
    }
  },
  methods: {
    setToken(token) {
      this.sponsor.payment.token = token;
    },
    startSponsorship(sponsor) {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        axios.post(`${process.env.VUE_APP_API}/sponsorChild`, sponsor);
      }
    }
  }
};
</script>

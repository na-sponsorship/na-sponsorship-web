<template>
  <div>
    <hero :header-bg="bgImage">
      <div class="mt-48">
        <h1 class="text-3xl text-white font-bold text-center">
          Contact Us
        </h1>
      </div>
      <hr class="bg-white h-px opacity-50 w-1/2" />
      <div class="text-sm text-white text-center">
        <h2>
          A simply dummy text of the pribeen the industry's standard dum .
        </h2>
      </div>
    </hero>
    <div class="flex justify-center">
      <div
        class="z-10 -mt-56 w-full mx-2 rounded-lg shadow-2xl px-2 mb-3 pt-3 bg-white flex items-center justify-around md:w-3/5 md:px-8"
      >
        <div
          v-if="messageSent"
          class="text-3xl text-green-700 font-extrabold uppercase"
        >
          <FAIcon icon="check-circle" /> Message Sent
        </div>
        <div v-if="!messageSent" class="flex-1">
          <div class="md:flex mt-10">
            <div
              class="flex-1 md:mr-2 form-group mb-2"
              :class="{
                'has-error': $v.contactForm.firstName.$error,
                'is-valid':
                  $v.contactForm.firstName.$dirty &&
                  !$v.contactForm.firstName.$invalid
              }"
            >
              <input
                placeholder="First Name"
                class="form-input w-full sm:text-xl"
                v-model="$v.contactForm.firstName.$model"
              />
              <div
                class="error"
                v-if="
                  !$v.contactForm.firstName.required &&
                    $v.contactForm.firstName.$dirty
                "
              >
                Please enter a first name
              </div>
            </div>
            <div
              class="flex-1 md:mr-2 form-group"
              :class="{
                'has-error': $v.contactForm.lastName.$error,
                'is-valid':
                  $v.contactForm.lastName.$dirty &&
                  !$v.contactForm.lastName.$invalid
              }"
            >
              <input
                placeholder="Last Name"
                class="form-input w-full mb-2 sm:text-xl"
                v-model="$v.contactForm.lastName.$model"
              />
              <div
                class="error"
                v-if="
                  !$v.contactForm.lastName.required &&
                    $v.contactForm.lastName.$dirty
                "
              >
                Please enter a last name
              </div>
            </div>
          </div>
          <div class="flex mb-3">
            <div
              class="flex-1 md:mr-2 form-group"
              :class="{
                'has-error': $v.contactForm.email.$error,
                'is-valid':
                  $v.contactForm.email.$dirty && !$v.contactForm.email.$invalid
              }"
            >
              <input
                placeholder="Email"
                class="form-input w-full sm:text-xl"
                v-model="$v.contactForm.email.$model"
              />
              <div
                class="error"
                v-if="
                  !$v.contactForm.email.required && $v.contactForm.email.$dirty
                "
              >
                Please enter an email
              </div>
              <div class="error" v-if="!$v.contactForm.email.email">
                Please enter a valid email address
              </div>
            </div>
          </div>
          <div class="flex mb-3">
            <div class="flex-1 md:mr-2 form-group">
              <textarea
                placeholder="Message Us"
                class="form-input w-full h-56"
                v-model="contactForm.message"
              ></textarea>
            </div>
          </div>
          <div
            class="flex flex-col items-center justify-between mb-8 md:flex-row"
          >
            <span class="text-center -mt-1 text-xs md:-mt-12 md:text-left">
              This site is protected by reCAPTCHA and the Google
              <a
                class="text-orange-500"
                target="_blank"
                href="https://policies.google.com/privacy"
                >Privacy Policy</a
              >
              and
              <a
                class="text-orange-500"
                target="_blank"
                href="https://policies.google.com/terms"
                >Terms of Service</a
              >
              apply.
            </span>
            <button
              @click="sendMessage(contactForm)"
              :disabled="isSending"
              class="btn btn-primary mr-0 mt-2 px-6 py-2 text-base float-right md:mr-2"
            >
              <FAIcon icon="spinner" pulse v-if="isSending" />
              <span v-if="!isSending">Submit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex mb-32 mt-10 ">
      <div class="md:w-3/5 md:m-auto">
        <div class="flex mb-4 flex-col md:justify-around px-4 md:flex-row">
          <div class="mb-2">
            <h1 class="font-bold text-gray-700">Our Location</h1>
            <p class="text-gray-700">
              Str 24 Avenue North
            </p>
            <p>Atlanta Georgia 30043 USA</p>
          </div>
          <div class="mb-2">
            <h1 class="font-bold text-gray-700">Phone</h1>
            <p class="text-gray-700">
              <FAIcon class="inline-flex mr-1 text-gray-700" icon="phone" />+ 1
              404-384-4324
            </p>
          </div>
          <div class="w-1/4 h-12">
            <h1 class="font-bold text-gray-700">Email</h1>
            <p class="text-gray-700">
              <FAIcon class="inline-flex mr-1 text-gray-700" icon="envelope" />
              info@noahsarc.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
import axios from "axios";

import hero from "@components/Hero";

export default {
  components: { hero },
  validations: {
    contactForm: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      email: {
        required,
        email
      }
    }
  },
  data() {
    return {
      bgImage: require("@assets/img/headers/children2.jpg"),
      messageSent: false,
      isSending: false,
      contactForm: {
        firstName: null,
        lastName: null,
        email: null
      }
    };
  },
  methods: {
    sendMessage(contactForm) {
      this.$v.$touch();
      this.$recaptcha("contact").then(token => {
        if (!this.$v.$invalid) {
          this.isSending = true;
          axios
            .post(`${process.env.VUE_APP_API}/app/contact`, contactForm, {
              headers: { recaptcha: token }
            })
            .then(() => {
              this.messageSent = true;
              this.isSending = false;
            });
        }
      });
    }
  }
};
</script>

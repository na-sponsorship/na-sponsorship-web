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
        class="page-width-constraint z-10 -mt-56  px-16 rounded-lg shadow-2xl mb-3 pt-3 bg-white"
      >
        <div class="flex mb-3 mt-10">
          <div
            class="flex-1 mr-2 form-group"
            :class="{
              'has-error': $v.contactForm.firstName.$error,
              'is-valid':
                $v.contactForm.firstName.$dirty &&
                !$v.contactForm.firstName.$invalid
            }"
          >
            <input
              placeholder="First Name"
              class="form-input w-full"
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
            class="flex-1 mr-2 form-group"
            :class="{
              'has-error': $v.contactForm.lastName.$error,
              'is-valid':
                $v.contactForm.lastName.$dirty &&
                !$v.contactForm.lastName.$invalid
            }"
          >
            <input
              placeholder="Last Name"
              class="form-input w-full"
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
            class="flex-1 mr-2 form-group"
            :class="{
              'has-error': $v.contactForm.email.$error,
              'is-valid':
                $v.contactForm.email.$dirty && !$v.contactForm.email.$invalid
            }"
          >
            <input
              placeholder="Email"
              class="form-input w-full"
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
          <div class="flex-1 mr-2 form-group">
            <textarea
              placeholder="Message Us"
              class="form-input w-full h-56"
              v-model="contactForm.message"
            ></textarea>
          </div>
        </div>
        <div class="flex-1">
          <button
            class="btn btn-primary mt-2 px-6 py-2 text-base mb-8 float-right mr-2 "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-center mb-32 mt-10 ">
      <div class="page-width-constraint">
        <div class="flex mb-4">
          <div class="w-1/4 bg-white-500 h-12">
            <h1 class="font-bold text-gray-700">Our Location</h1>
            <p class="text-gray-700">
              Str 24 Avenue North Atlanta Georgia 30043 USA
            </p>
          </div>
          <div class="w-1/4 bg-white-400 h-12"></div>
          <div class="w-1/4 bg-white-500 h-12"></div>
          <div class="w-1/4 bg-white-500 h-12">
            <h1 class="font-bold text-gray-700">Phone</h1>
            <p class="text-gray-700">
              <FAIcon
                class="inline-flex mr-1 text-gray-700"
                :icon="['fas', 'phone']"
              />+ 1 404-384-4324
            </p>
          </div>
          <div class="w-1/4 bg-white-400 h-12">
            <h1 class="font-bold text-gray-700">Email</h1>
            <p class="text-gray-700">
              <FAIcon
                class="inline-flex mr-1 text-gray-700"
                :icon="['fas', 'envelope']"
              />
              info@noahsarc.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import hero from "../../components/Hero";
import { required, email } from "vuelidate/lib/validators";

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
      contactForm: {
        firstName: null,
        lastName: null,
        email: null
      }
    };
  }
};
</script>

<template>
  <ValidationObserver
    ref="form"
    tag="form"
    @submit.prevent="sendMessage(contactForm)"
  >
    <hero :header-bg="bgImage">
      <div class="mt-48">
        <h1 class="text-3xl text-white font-bold text-center">
          Get In Touch
        </h1>
      </div>
      <hr class="bg-white h-px opacity-50 w-1/2" />
      <div class="text-sm text-white text-center">
        <h2>
          For more information do not hesitate to reach out to us.
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
            <ValidationProvider
              name="first name"
              rules="required"
              v-slot="{ errors, classes }"
              slim
            >
              <div class="flex-1 mb-2 form-group md:mr-2" :class="classes">
                <input
                  placeholder="First Name"
                  class="form-input w-full mb-2 sm:text-xl"
                  v-model="contactForm.firstName"
                />
                <div class="error">{{ errors[0] }}</div>
              </div>
            </ValidationProvider>
            <ValidationProvider
              name="last name"
              rules="required"
              v-slot="{ errors, classes }"
              slim
            >
              <div class="flex-1 md:mr-2 form-group" :class="classes">
                <input
                  placeholder="Last Name"
                  class="form-input w-full mb-2 sm:text-xl"
                  v-model="contactForm.lastName"
                />
                <div class="error">{{ errors[0] }}</div>
              </div>
            </ValidationProvider>
          </div>
          <ValidationProvider
            name="email"
            rules="required|email"
            v-slot="{ errors, classes }"
            slim
          >
            <div class="flex mb-3">
              <div class="flex-1 md:mr-2 form-group" :class="classes">
                <input
                  placeholder="Email"
                  class="form-input w-full sm:text-xl"
                  v-model="contactForm.email"
                />
                <div class="error">{{ errors[0] }}</div>
              </div>
            </div>
          </ValidationProvider>
          <ValidationProvider
            name="message"
            rules="required"
            v-slot="{ errors, classes }"
            slim
          >
            <div class="flex mb-3">
              <div class="flex-1 md:mr-2 form-group" :class="classes">
                <textarea
                  placeholder="Message Us"
                  class="form-input w-full h-56"
                  v-model="contactForm.message"
                ></textarea>
                <div class="error">{{ errors[0] }}</div>
              </div>
            </div>
          </ValidationProvider>
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
              type="submit"
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
        <div class="flex mb-4 flex-col md:justify-between px-4 md:flex-row">
          <div class="mb-2">
            <h1 class="font-bold text-gray-700">Uganda</h1>
            <div class="flex flex-col">
              <p class="text-gray-700 font-bold italic">
                Noah's Arc Organization
              </p>
              <p>Kenneth Kabagambe and Beatrice Kabagambe</p>
              <div class="flex mb-1 mt-1">
                <span class="w-6"><FAIcon class="w-20" icon="building"/></span>
                <span>P.O. Box 1083 Kyenjojo, Uganda</span>
              </div>
              <div class="flex">
                <span class="w-6"><FAIcon icon="phone"/></span>
                <span><a href="tel:+256 701 117410">+256 701 117410</a></span>
              </div>
            </div>
          </div>
          <div class="mb-2">
            <h1 class="font-bold text-gray-700">United States</h1>
            <div class="flex flex-col">
              <p class="text-gray-700 font-bold italic">
                ThinSpace Africa
              </p>
              <div class="flex mb-1 mt-1">
                <span class="w-6"><FAIcon class="w-20" icon="building"/></span>
                <span>P.O. 7471, Burbank CA, 91505</span>
              </div>
              <div class="flex">
                <span class="w-6"><FAIcon icon="envelope"/></span>
                <span>
                  <a href="mailto:info@thinspaceafrica.org"
                    >info@thinspaceafrica.org</a
                  ></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ValidationObserver>
</template>
<script>
import axios from 'axios';

import hero from '@components/Hero';

export default {
  components: { hero },
  data() {
    return {
      bgImage: require('@assets/img/headers/children2.jpg'),
      messageSent: false,
      isSending: false,
      contactForm: {
        firstName: '',
        lastName: '',
        email: '',
      },
    };
  },
  methods: {
    async sendMessage(contactForm) {
      const isValid = await this.$refs.form.validate();

      if (!isValid) {
        return;
      }

      this.isSending = true;

      try {
        const capthaToken = await this.$recaptcha('contact');

        await axios.post(`${process.env.VUE_APP_API}/app/contact`, contactForm, { headers: { recaptcha: capthaToken } });

        this.messageSent = true;
        this.isSending = false;
      } catch (err) {
        /**
         * @TODO Log error to sentry and fail silently
         */
        this.isSending = false;
        this.messageSent = true;
      }
    },
  },
};
</script>

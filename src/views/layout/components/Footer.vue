<template>
  <div>
    <Modal class="w" v-if="donationModal" @onCloseModal="closeModal" size="md">
      <form-wizard
        title="Donate to Noah's Arc"
        subtitle="All donations are tax deductable"
      >
        <tab-content title="Amount">
          <div class="flex flex-col text-sm">
            <p class="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              tempora provident labore ad? Quam atque facilis eaque sequi
            </p>
            <label class="my-1">
              <input
                type="text"
                v-model="donation.payment.amount"
                class="form-input"
                placeholder="Choose amount"
              />
            </label>
            <label class="my-1">
              <input
                type="checkbox"
                v-model="donation.payment.isMonthly"
                class="form-checkbox mr-2"
                placeholder="Amout"
              />
              <span>Make this a monthly donation</span>
            </label>
          </div>
        </tab-content>
        <tab-content title="Payment" class="mb-5">
          <div class="flex flex-col">
            <div class="flex flex-row my-1">
              <input
                placeholder="First Name"
                v-model="donation.donorInformation.firstName"
                type="text"
                class="form-input mr-2 w-1/2"
              />
              <input
                placeholder="Last Name"
                v-model="donation.donorInformation.lastName"
                type="text"
                class="form-input w-1/2"
              />
            </div>
            <div class="my-1">
              <input
                placeholder="Email"
                v-model="donation.donorInformation.email"
                type="email"
                class="form-input w-full my-1"
                name=""
                id=""
              />
            </div>
            <CreditCardForm class="-mt-2"></CreditCardForm>
          </div>
        </tab-content>
        <tab-content title="Summary">
          <div>
            <h4>Donation amount: {{ donation.payment.amount }}</h4>
          </div>
        </tab-content>
      </form-wizard>
    </Modal>
    <hero :header-bg="bgImage" size="md">
      <div class="md:w-3/4 md:m-auto">
        <div class="mt-32">
          <h1 class="text-3xl text-green-500 text-center font-cursive">
            Donation
          </h1>
        </div>

        <div class="text-sm text-white text-center">
          <p>
            If you wish to make a general donation to Noah's Arc click bellow.
          </p>
          <button
            class="btn btn-primary mt-2 px-6 py-2 text-base mb-8 mr-2 mt-4"
            @click="donate()"
            @onDismiss="donationModal = false"
          >
            Donate Now
          </button>
        </div>
      </div>
    </hero>
    <div class="bg-brown-fade-to-black">
      <div class="flex flex-col md:flex-row md:w-3/4 md:m-auto">
        <div class="flex-1 px-5">
          <img :src="logoLight" class=" my-2" />
          <div>
            <p class="leading-relaxed font-medium text-white text-indent">
              Noah’s ARC is a Christian based NGO/CBO operating in Kyenjojo
              District, Mid-Western Uganda.
            </p>
            <p class="leading-relaxed font-medium text-white text-indent">
              The main focus is on aimed at fighting and eradicating hunger,
              poverty, illiteracy, and exposure to preventable diseases to all
              unconditionally regardless of religion, race and political
              affiliation.
            </p>
          </div>
        </div>
        <div class="flex-1 mx-5 my-2">
          <h2 class="uppercase text-white text-3xl">About Us</h2>
          <span class="block border-b h-2 mb-2 w-1/6">&nbsp;</span>
          <ul>
            <li class="my-2 text-white">
              <a href="">History</a>
            </li>
            <li class="my-2 text-white">
              <a href="">How We Serve</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="flex items-center px-5 py-5 justify-between md:w-3/4 md:m-auto"
      >
        <div class="flex flex-col text-sm text-white">
          <span></span>&copy; 2019 All right reserved. Noah's Arc
          <span
            >ThinSpace Africa is a registered 501(c)(3) nonprofit organization.
            EIN 47-5374451 Contributions are tax deductible</span
          >
        </div>

        <div class="flex">
          <div
            class="px-2"
            v-bind:key="index"
            v-for="(item, index) in socialLinks"
          >
            <a :href="item.to" target="_blank">
              <FAIcon class="text-white text-2xl" :icon="['fab', item.icon]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.bg-brown-fade-to-black {
  background: linear-gradient(
    0deg,
    rgba(16, 13, 11, 1) 0%,
    rgba(82, 63, 56, 1) 100%
  );
}
</style>

<script>
import hero from "../../../components/Hero";
import Modal from "../../../components/ui/Modal";
import CreditCardForm from "../../../components/CreditCardForm";
import { FormWizard, TabContent } from "vue-form-wizard";

export default {
  components: { hero, Modal, FormWizard, TabContent, CreditCardForm },
  data() {
    return {
      donation: {
        payment: {
          amount: null,
          isMonthly: false
        },
        donorInformation: {
          firstName: null,
          lastName: null,
          email: null
        }
      },
      donationModal: false,
      bgImage: require("@assets/img/headers/children2.jpg"),
      logoLight: require("@assets/img/logo/light@3x.png"),
      socialLinks: [
        { icon: "instagram", to: "http://www.instagram.com/noahsark10/" },
        {
          icon: "facebook-f",
          to:
            "http://www.facebook.com/profile.php?id=100000461473064&ref=content_filter"
        },
        {
          icon: "youtube",
          to: "http://www.youtube.com/channel/UCpHmZSfKw3iFA0hnWI9CX6A"
        }
      ]
    };
    myOptions: ["One Time"];
  },
  methods: {
    donate() {
      this.donationModal = true;
    },
    closeModal(vali) {
      console.log(vali);

      this.donationModal = false;
    }
  }
};
</script>

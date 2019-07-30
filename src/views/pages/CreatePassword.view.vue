<template>
  <div>
    <hero :header-bg="bgImage">
      <div>
        <h1 class="text-3xl text-white font-bold text-center">
          <template v-if="$route.name === 'create-password'">
            Create A Password
          </template>
          <template v-if="$route.name === 'reset-password'">
            Reset Password
          </template>
        </h1>
      </div>
      <hr class="bg-white h-px opacity-50 w-1/2" />
    </hero>
    <div class="flex justify-center">
      <div class="flex flex-col">
        <div
          class="page-width-constraint z-10 -mt-32 px-8 rounded-lg shadow-2xl mb-3 pt-3 bg-white w-full"
        >
          <h2 class="flex mt-5 text-orange-500 font-semibold">Username:</h2>
          <h3 class="text-gray-700 font-medium">{{ username }}</h3>
          <div class="flex mb-3 mt-5">
            <div class="flex-1 mr-2 form-group">
              <input placeholder="New Password" class="form-input w-full" />
            </div>
          </div>
          <div class="flex mb-3">
            <div class="flex-1 mr-2 form-group">
              <input placeholder="Confirm Password" class="form-input w-full" />
            </div>
          </div>
          <div class="flex-1">
            <button
              class="btn btn-primary mt-2 px-6 py-2 text-base mb-8 float-right mr-2 "
            >
              <template v-if="$route.name === 'create-password'">
                Create Password
              </template>
              <template v-if="$route.name === 'reset-password'">
                Reset Password
              </template>
            </button>
          </div>
        </div>
        <div class="my-10 text-gray-800 f">
          If you have problems with your account, please
          <router-link to="/contact" class="font-bold">contact us</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import hero from "../../components/Hero";

export default {
  components: { hero },
  created() {
    // If there is no token present, send them to the login page
    if (!this.$route.query.token) {
      this.$router.replace("/login");
    }

    // Look up the username based on the token
    axios
      .get(
        `${process.env.VUE_APP_API}/user/usernameFromToken/${
          this.$route.query.token
        }`
      )
      .then(username => {
        console.log(username);
      });
  },
  data() {
    return {
      username: null,
      bgImage: require("@assets/img/headers/children2.jpg")
    };
  }
};
</script>

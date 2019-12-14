<template>
  <div>
    <hero :header-bg="bgImage" size="md">
      <div class="mt-48">
        <h1 class="text-3xl text-white font-bold text-center">
          Sign Up
        </h1>
        <hr class="bg-white h-px opacity-50 w-1/2" />
      </div>
    </hero>
    <div class="flex justify-center -m-20">
      <div class="w-full max-w-sm z-10 md:max-w-md">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-orange-500 text-sm font-bold mb-4"
              for="username"
            >
              EMAIL:
            </label>
            <input
              class="shadow appearance-none border rounded-lg w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Security Code"
            />
          </div>
          <div class="mb-2">
            <input
              class="shadow appearance-none border rounded-lg w-full py-4 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div class="mb-6">
            <input
              class="shadow appearance-none border rounded-lg w-full py-4 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600 text-center w-full text-white font-bold"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="postcss"></style>

<script>
import hero from "@components/Hero";
export default {
  components: { hero },
  data() {
    return {
      bgImage: require("@assets/img/headers/children2.jpg")
    };
  }
};
</script>

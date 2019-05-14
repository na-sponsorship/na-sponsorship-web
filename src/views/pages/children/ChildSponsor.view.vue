<template>
  <div class="flex justify-center">
    <div class="page-width-contraint" v-if="child">
      <router-link class="btn btn-primary" to="/children">
        <FAIcon :icon="['fas', 'caret-left']" />&nbsp; All Children
      </router-link>
      <div class="flex shadow-lg p-2 m-2">
        <div>
          <img class="shadow rounded-lg border" :src="child.picture.url" />
        </div>
        <div class="flex-1 p-2">
          <table class="child-info">
            <tr>
              <td>Name:</td>
              <td>{{ child.firstName }} {{ child.lastName }}</td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>{{ child.gender }}</td>
            </tr>
            <tr>
              <td>AGE:</td>
              <td>{{ getAge(child.dateOfBirth) }} years old</td>
            </tr>
            <tr>
              <td>Grade:</td>
              <td>{{ child.grade }}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="flex flex-col m-2">
        <h2>Story</h2>
        <span>
          {{ child.story }}
        </span>
        <h2>Sponsor {{ child.firstName }}</h2>
        <div class="flex flex-col shadow-lg p-3">
          <div class="flex">
            <div>
              <input v-model="sponsor.firstName" placeholder="First Name" />
            </div>
            <div>
              <input v-model="sponsor.lastName" placeholder="Last Name" />
            </div>
          </div>
          <div class="flex">
            <div>
              <input v-model="sponsor.email" placeholder="Email" />
            </div>
            <div>
              <select v-model="sponsor.country">
                <option value="" selected>Select a Country</option>
                <option
                  v-for="(country_code, country_name) in countries"
                  :value="country_code"
                  :key="country_code"
                  >{{ country_name }}</option
                >
              </select>
            </div>
          </div>
          <div class="flex">
            <div>
              <input v-model="sponsor.address" placeholder="Address" />
            </div>
          </div>
          <div class="flex">
            <div>
              <input v-model="sponsor.city" placeholder="City" />
            </div>
            <div>
              <select v-model="sponsor.state">
                <option
                  v-for="(state_code, state_name) in states"
                  :value="state_code"
                  :key="state_code"
                  >{{ state_name }}</option
                >
              </select>
            </div>
            <div>
              <input v-model="sponsor.zip" placeholder="Zip" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.child-info > tr td:first-child {
  @apply text-right uppercase font-bold;
}

.child-info > tr td {
  @apply pt-2 pb-2 pl-2;
}
</style>

<script>
import axios from "axios";
import dayjs from "dayjs";
import countries from "@src/helpers/countries.helper";
import states from "@src/helpers/states.helper";

export default {
  data() {
    return {
      countries: countries,
      states: states,
      child: null,
      sponsor: {
        firstName: null,
        lastName: null,
        email: null,
        country: "",
        address: null,
        city: null,
        state: null,
        zip: null
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
      });
  },
  methods: {
    getAge(age) {
      return dayjs().diff(age, "years");
    }
  }
};
</script>

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
           <div class="flex flex-wrap shadow-lg">
            <div class="w-2/5 p-1">
              <div class="text-grey-darker text-center bg-grey-light p-2">
                <textarea v-model="message" placeholder="First Name"></textarea></div>
              </div>
            <div class="w-2/5 p-1">
              <div class="text-grey-darker text-center bg-grey-light p-2">
                <textarea v-model="message" placeholder="Last Name"></textarea></div>
            </div>
            <div class="w-2/5 p-1">
              <div class="text-grey-darker text-center bg-grey-light p-2">
                <textarea v-model="message" placeholder="Email"></textarea></div>
            </div>
            <div class="w-2/5 p-1">
              <div class="text-grey-darker text-center bg-grey-light p-2">
                <textarea v-model="message" placeholder="Country"></textarea></div>
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

export default {
  data() {
    return {
      child: null
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

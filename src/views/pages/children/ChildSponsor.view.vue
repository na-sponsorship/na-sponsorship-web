<template>
  <div class="flex justify-center">
    <div class="page-width-contraint">
      <div class="flex shadow-lg p-2 m-2">
        <div>
          <img class="rounded-lg border" :src="child.picture.url" alt="" />
        </div>
        <div class="flex-1 p-2">
          <table>
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
      <div class="flex flex-col">
        
      </div>
    </div>
  </div>
</template>

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

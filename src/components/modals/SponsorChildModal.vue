<template>
  <Modal
    v-if="child"
    :title="'Sponsor ' + child.firstName"
    :footer="false"
    @onDismiss="$emit('onDismiss')"
  >
    <form class="w-full m-w-lg">
      <div class="form-group">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="grid-first-name">First Name</label>
          <input type="text" id="grid-first-name" placeholder="First Name" />
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="grid-last-name">Last Name</label>
          <input
            type="text"
            class="focus:outline-none focus:bg-white"
            id="grid-last-name"
            placeholder="Last Name"
          />
        </div>
      </div>
    </form>
    <div>
      <div id="card-element"></div>
      <button class="btn btn-primary" @click="submitPayment()">
        Submit payment
      </button>
    </div>
  </Modal>
</template>

<script>
import Modal from "../ui/Modal";

export default {
  props: ["child"],
  components: { Modal }
};
</script>

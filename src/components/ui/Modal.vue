<template>
  <div>
    <div class="modal-backdrop"></div>
    <div class="modal">
      <div class="modal-container">
        <div class="flex">
          <h3 class="flex-1">{{ title }}</h3>
          <span>
            <a class="cursor-pointer" @click="$emit('onDismiss')">
              <FAIcon icon="times" />
            </a>
          </span>
        </div>
        <div>
          <slot></slot>
        </div>
        <div class="flex flex-col" v-if="footer">
          <hr class="" />
          <div class="flex-1 text-right">
            <button class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.modal-backdrop {
  @apply fixed inset-0 z-50 overflow-auto bg-black opacity-75 flex;
}

.modal {
  @apply fixed inset-0 z-50 overflow-auto flex;
}

.modal-container {
  @apply relative bg-white w-full max-w-md m-auto flex-col flex;
}

.modal-container > div {
  @apply p-2;
}
</style>

<script>
export default {
  props: ["title", "footer"]
};
</script>

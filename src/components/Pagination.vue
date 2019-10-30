<template>
  <div>
    <button
      v-if="currentPage > 1"
      :disabled="currentPage <= 1"
      class="btn btn-secondary mr-3 text-2xl md:text-base"
      @click="$emit('on-page-navigate', currentPage - 1)"
    >
      Previous
    </button>
    <button
      class="hidden text-2xl md:inline md:text-base"
      :class="{
        'btn btn-secondary': currentPage == page,
        'btn ': currentPage != page
      }"
      v-for="page in pages"
      :key="page"
      @click="$emit('on-page-navigate', page)"
    >
      {{ page }}
    </button>
    <button
      v-if="currentPage !== pages"
      :disabled="currentPage == pages"
      class="btn btn-secondary ml-3 text-2xl md:text-base"
      @click="$emit('on-page-navigate', currentPage + 1)"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  props: {
    pages: Number,
    currentPage: Number,
  },
};
</script>

<template>
  <li class="step-container">
    <a href="#" class="flex">
      <span
        class="bg-green-light text-white p-2 rounded-full block w-16 h-16 flex items-center text-3xl"
      >
        <FAIcon class="flex-1" :icon="['fas', icon]" />
      </span>
      <slot></slot>
    </a>
  </li>
</template>

<style lang="postcss">
.step-container {
  @apply flex-1;
}

.step-container a::before {
  background-image: linear-gradient(
      to bottom left,
      transparent 49.6%,
      #72c02c 50%
    ),
    linear-gradient(to top left, transparent 49.6%, #72c02c 50%);
}
</style>

<script>
export default {
  props: ["icon"]
};
</script>

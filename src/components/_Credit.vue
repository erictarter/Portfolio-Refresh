<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({})
</script>

<template>
  <div
    id="credit-section"
    class="d-flex credit flex-column w-100 justify-content-center align-items-center align-items-sm-end mt-5 px-3">
    <div>
      Photos from
      <a class="p-0 ms-1" target="_blank" rel="noopener noreferrer" href="https://unsplash.com/">
        unsplash</a
      >
    </div>
  </div>
</template>

<style scoped>
  a {
    color: hsla(329, 89%, 80%, 0.9);
    text-decoration: underline;
  }
</style>

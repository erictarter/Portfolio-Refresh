<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({})
</script>

<template>
  <div
    id="blog-section"
    class="blog-section mt-5 pt-5 d-flex flex-column justify-content-center align-items-center my-3 px-3">
    <h2 class="mb-4 w-100 text-muted" style="text-align: left;">Blog</h2>
    <a
      target="_blank"
      href="https://timely-semolina-84be97.netlify.app/"
      class="blog-link p-0 w-100 d-flex justify-content-center align-items-center">
      Blog Post
    </a>
  </div>
</template>

<style scoped>
  h2 {
    color: var(--text-muted);
  }

  .blog-overlay-text {
    color: var(--text-primary);
  }
</style>

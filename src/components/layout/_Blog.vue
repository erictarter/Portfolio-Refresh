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
      Blog
    </a>
  </div>
</template>

<style scoped>
  h2 {
    color: var(--text-muted);
  }

  .blog-link {
    height: 8rem;
    border-radius: 8px;
    background: linear-gradient(135deg, rgb(241 228 237 / 90%) 0%, rgba(255, 255, 255, 0.6) 100%);
    transition: 0.2s ease all;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    position: relative;
    text-decoration: none;
    border: none !important;
    cursor: pointer;
    color: #495057;
    font-size: 1.5rem;
    font-weight: 900;
    background-clip: padding-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    letter-spacing: 1px;
    backdrop-filter: blur(4px);
  }

  .blog-link:hover {
    transform: scale(1.03);
    transition: 0.2s ease all;
    box-shadow: hsla(329, 40%, 85%, 0.4) 5px 5px,
      hsla(329, 40%, 85%, 0.3) 10px 10px, hsla(329, 40%, 85%, 0.2) 15px 15px;
  }
</style>

<style>
  /* Dark mode styling for blog link to match community button */
  .night-mode-wrapper .blog-link {
    background: linear-gradient(135deg, rgb(241 228 237 / 90%) 0%, rgba(255, 255, 255, 0.6) 100%) !important;
    color: #495057 !important;
    border: none !important;
  }
</style>

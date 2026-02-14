<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({})
</script>

<template>
  <footer
    id="footer-section"
    class="footer d-flex justify-content-between align-items-center mt-5 py-3 px-3">
    <div>
      <p class="fs-5 text-center">© Eric Tarter</p>
    </div>
    <div class="socials">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/erictarter">
        <i class="lni lni-github fs-3" aria-label="GitHub"></i>
        <span class="sr-only">Github Link</span>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/eric-tarter-b2549a203/">
        <i class="lni lni-linkedin-original fs-3" aria-label="LinkedIn">
          <span class="sr-only">LinkedIn Link</span>
        </i>
      </a>
    </div>
  </footer>
</template>

<style scoped></style>

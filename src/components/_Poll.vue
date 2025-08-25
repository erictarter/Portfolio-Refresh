<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({})
</script>

<template>
  <div class="poll px-3 mt-5 pt-5 mb-5 section-bg" id="poll-section">
    <h2 class="mb-4 text-muted" style="text-align: left;">Community</h2>
    
    <!-- Blog Link -->
    <a
      target="_blank"
      href="https://timely-semolina-84be97.netlify.app/"
      class="community-link w-100 d-flex justify-content-center align-items-center mb-4">
      <span class="community-text">
        <i class="lni lni-blogger me-2"></i> Blog Post
      </span>
    </a>

    <!-- Poll Question -->
    <button
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      class="community-link w-100 text-center p-4 mb-5 fs-5 fw-bold open-poll-modal">
      <span class="community-text">
        <i class="lni lni-clipboard me-2"></i> Poll Question
      </span>
    </button>
  </div>
</template>

<style scoped>
  .section-bg {
    margin-bottom: 2rem;
    position: relative;
    padding-top: 2rem !important;
    padding-bottom: 2rem;
  }

  .community-link {
    height: 8rem;
    border-radius: 8px;
    background: linear-gradient(135deg, rgb(241 228 237 / 90%) 0%, rgba(255, 255, 255, 0.6) 100%);
    transition: 0.2s ease all;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    position: relative;
    text-decoration: none;
    border: none;
    cursor: pointer;
  }

  .community-text {
    color: #495057;
    font-size: 1.5rem;
    font-weight: 900;
    background: transparent;
    padding: 1rem 2rem;
    border-radius: 6px;
    letter-spacing: 1px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(4px);
  }

  .community-link:hover {
    transform: scale(1.03);
    transition: 0.2s ease all;
    box-shadow: hsla(329, 40%, 85%, 0.4) 5px 5px,
      hsla(329, 40%, 85%, 0.3) 10px 10px, hsla(329, 40%, 85%, 0.2) 15px 15px;
  }
</style>

<style>
  /* Dark mode styling - unscoped to ensure proper targeting */
  .night-mode-wrapper .section-bg {
    background: #333;
  }

  .night-mode-wrapper .community-link {
    background: linear-gradient(135deg, rgb(241 228 237 / 90%) 0%, rgb(42 42 42 / 60%) 90%) !important;
  }

  .night-mode-wrapper .community-text {
    color: #f8f9fa !important;
    background: transparent;
    border: none;
  }
</style>

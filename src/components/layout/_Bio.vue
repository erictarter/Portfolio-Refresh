<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({})
</script>

<template>
  <div class="bio-hero-wrapper">
    <div
      class="bio d-flex flex-column justify-content-center px-3 mt-4 bio-hero"
      id="bio-section">
      <div class="bio-personal">
        <h1 class="text-muted">Eric Tarter</h1>
        <p class="fs-4" style="line-height: normal;">
          Front-End Developer Living in the Pacific Northwest
          <svg width="32" height="32" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" style="vertical-align:baseline; display:inline-block; transform: translate(-4px,2px);">
            <defs>
              <linearGradient id="bioTreeGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" style="stop-color:#2d5a3d;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#4a7c59;stop-opacity:1" />
              </linearGradient>
            </defs>
            <polygon points="22,25 13,41 31,41" fill="url(#bioTreeGradient)" opacity="0.7"/>
            <polygon points="22,31 16,43 28,43" fill="url(#bioTreeGradient)" opacity="0.6"/>
          </svg>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .bio-hero-wrapper {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    /* Move background to wrapper for full-width effect */
    background: linear-gradient(135deg, rgb(241 228 237 / 90%) 0%, rgba(255, 255, 255, 0.6) 100%);
    margin-bottom: 2rem;
  }

  .bio-hero {
    /* Remove background from inner container */
    position: relative;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
  }

  .bio-personal h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    /* Eric Tarter name always stays dark grey */
    color: #495057 !important;
  }

  .bio-personal p {
    color: #495057;
    font-weight: 400;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .bio-personal h1 {
      font-size: 2rem;
    }
    
    .bio-hero-wrapper {
      margin-bottom: 1.5rem;
    }
  }
</style>

<style>


  .night-mode-wrapper .bio-personal p {
    color: #495057;
  }

  /* Ensure Eric Tarter name stays dark grey in both modes */
  .night-mode-wrapper .bio-personal h1 {
    color: #495057 !important;
  }
</style>

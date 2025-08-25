<script setup lang="ts">
  defineProps<{
    darkMode: boolean
  }>()
</script>

<template>
  <div class="skills-section mx-3" id="skills-section">
    <h2 class="mb-4 text-muted">My Skills</h2>
    
    <!-- Frontend Technologies -->
    <div class="mt-4">
      <h5 class="mb-3 text-muted">Frontend Technologies</h5>
      <div class="row g-3">
        <div class="col-6 col-md-4 col-lg-2">
          <div class="skill-item">
            <v-icon class="skill-icon mb-2" name="io-logo-vue" />
            <div class="skill-label">Vue.js</div>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <div class="skill-item">
            <v-icon class="skill-icon mb-2" name="co-react" />
            <div class="skill-label">React</div>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <div class="skill-item">
            <v-icon class="skill-icon mb-2" name="co-javascript" />
            <div class="skill-label">JavaScript</div>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <div class="skill-item">
            <v-icon class="skill-icon mb-2" name="la-html5" />
            <div class="skill-label">HTML5</div>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <div class="skill-item">
            <v-icon class="skill-icon mb-2" name="co-css3" />
            <div class="skill-label">CSS3</div>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <div class="skill-item">
            <v-icon class="skill-icon mb-2" name="co-sass-alt" />
            <div class="skill-label">Sass</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Other Expertise -->
    <div class="mt-5">
      <h5 class="mb-3 text-muted">Other Expertise</h5>
      <div class="row g-3">
        <div class="col-6 col-md-4">
          <div class="skill-item-text">
            <i class="lni lni-eye skill-icon-small me-2"></i>
            <span class="skill-label">Accessibility</span>
          </div>
        </div>
        <div class="col-6 col-md-4">
          <div class="skill-item-text">
            <i class="lni lni-paint-bucket skill-icon-small me-2"></i>
            <span class="skill-label">UI/UX Design</span>
          </div>
        </div>
        <div class="col-6 col-md-4">
          <div class="skill-item-text">
            <i class="lni lni-bar-chart skill-icon-small me-2"></i>
            <span class="skill-label">Google Analytics 4</span>
          </div>
        </div>
        <div class="col-6 col-md-4">
          <div class="skill-item-text">
            <i class="lni lni-code skill-icon-small me-2"></i>
            <span class="skill-label">Google Tag Manager</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .skill-item {
    padding: 1rem;
    border-radius: 8px;
    transition: transform 0.2s ease;
  }

  .skill-item:hover {
    transform: translateY(-2px);
  }

  .skill-icon {
    font-size: 2.5rem;
    color: var(--icon-color);
  }

  .skill-label {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-primary);
  }

  .skill-item-text {
    display: flex;
    align-items: center;
    padding: 0.75rem;
    border-radius: 6px;
    background: linear-gradient(135deg, rgb(241 228 237 / 90%) 0%, rgba(255, 255, 255, 0.6) 100%);
    transition: all 0.2s ease;
  }

  .skill-item-text:hover {
    background: linear-gradient(135deg, rgb(241 228 237 / 90%) 0%, rgba(255, 255, 255, 0.6) 100%);
    transform: translateY(-1px);
    opacity: 0.9;
  }

  .skill-item-text .skill-label {
    color: #495057;
  }

  .skill-icon-small {
    font-size: 1.2rem;
    color: #495057;
  }

  h5.text-muted {
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--text-secondary);
    text-align: left;
  }

  h2 {
    text-align: left;
    color: var(--text-muted);
  }

  @media (max-width: 576px) {
    h5.text-muted {
      text-align: left;
      margin-left: 0;
      padding-left: 0;
    }
    
    h2 {
      text-align: left;
      margin-left: 0;
      padding-left: 0;
    }
  }

  /* Vue icon component specific targeting */
  :deep(.skill-icon) {
    color: var(--icon-color) !important;
  }

  :deep(.skill-icon svg) {
    color: var(--icon-color) !important;
    fill: var(--icon-color) !important;
  }

  /* Target Vue icons globally when in dark mode */
  :global(.night-mode-wrapper) .skill-icon {
    color: var(--icon-color) !important;
  }

  :global(.night-mode-wrapper) .skill-item svg {
    color: var(--icon-color) !important;
    fill: var(--icon-color) !important;
  }

  /* Ensure Eric Tarter name stays dark grey */
  :global(.night-mode-wrapper .bio-personal h1) {
    color: #495057 !important;
  }
</style>

<style>
  /* Dark mode gradients for skill items - unscoped for proper targeting */
  .night-mode-wrapper .skill-item-text {
    background: linear-gradient(135deg, rgb(241 228 237 / 90%) 0%, rgb(42 42 42 / 60%) 90%) !important;
  }

  .night-mode-wrapper .skill-item-text:hover {
    background: linear-gradient(135deg, rgb(241 228 237 / 90%) 0%, rgb(42 42 42 / 60%) 90%) !important;
    opacity: 0.9;
  }

  /* Keep Other Expertise text and icons dark in both modes */
  .night-mode-wrapper .skill-item-text .skill-label {
    color: #495057 !important;
  }

  .night-mode-wrapper .skill-icon-small {
    color: #495057 !important;
  }
</style>

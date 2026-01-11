<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectsSection'
})
</script>

<template>
  <div class="projects-section px-3 mt-5 pt-5" id="proj-section">
    <h2 class="mb-4 text-muted" style="text-align: left;">Projects</h2>

    <div class="projects">
      <!-- Project 1 -->
      <a
        class="project"
        target="_blank"
        rel="noopener noreferrer"
        href="https://enchanting-strudel-524249.netlify.app/"
      >
        <div class="project-text">
          <p class="fs-6 project-title">
            Outdoor Furniture Shop
          </p>
        </div>
      </a>

      <!-- Project 2 -->
      <a
        class="project"
        target="_blank"
        rel="noopener noreferrer"
        href="https://gifted-kepler-32c70b.netlify.app/"
      >
        <div class="project-text">
          <p class="fs-6 project-title">
            Home buying questionnaire
          </p>
        </div>
      </a>

      <!-- Project 3 -->
      <a
        class="project"
        target="_blank"
        rel="noopener noreferrer"
        href="https://affectionate-booth-7c6f42.netlify.app/"
      >
        <div class="project-text">
          <p class="fs-6 project-title">
            Tone JS Piano App
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

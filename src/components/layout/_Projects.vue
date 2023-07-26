<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    methods: {
      showOverlay(e: any) {
        e.target.children[0].classList.add('project-overlay-show')
      },
      hideOverlay(e: any) {
        e.target.children[0].classList.remove('project-overlay-show')
      }
    }
  })
</script>

<template>
  <div class="projects-section px-5" id="proj-section">
    <h2 class="mb-4">Projects</h2>
    <div class="projects">
      <a
        @mouseenter="showOverlay"
        @mouseleave="hideOverlay"
        target="_blank"
        href="https://mystifying-mahavira-4e8faa.netlify.app/"
        class="project">
        <div class="project-overlay d-none d-md-flex"></div>
        <p class="fs-5 project-description-lg d-none px-3 d-md-flex">
          Online Sunglasses Store with shopping cart
        </p>
        <p class="project-description-mobile d-flex d-md-none p-2">
          Online Store W/shopping cart
        </p>
      </a>
      <a
        @mouseenter="showOverlay"
        @mouseleave="hideOverlay"
        target="_blank"
        href="https://gifted-kepler-32c70b.netlify.app/"
        class="project">
        <div class="project-overlay d-none d-md-flex"></div>
        <p class="fs-5 project-description-lg d-none px-3 d-md-flex">
          Find Out how much house you can afford in this questionaire
        </p>
        <p class="project-description-mobile d-flex d-md-none p-2">
          Home Budget
        </p>
      </a>
      <a
        @mouseenter="showOverlay"
        @mouseleave="hideOverlay"
        target="_blank"
        href="https://tender-feynman-0a5def.netlify.app/"
        class="project"
        id="/#">
        <div class="project-overlay d-none d-md-flex"></div>
        <p class="fs-5 project-description-lg px-3 d-none d-md-flex">
          Get up to date covid data from the Covid Tracking Data API
        </p>
        <p class="project-description-mobile d-flex d-md-none p-2">
          Covid Data
        </p>
      </a>
      <a
        @mouseenter="showOverlay"
        @mouseleave="hideOverlay"
        target="_blank"
        href="https://affectionate-booth-7c6f42.netlify.app/"
        class="project">
        <div class="project-overlay d-none d-md-flex"></div>
        <p class="fs-5 project-description-lg d-none px-3 d-md-flex">
          Play around on this Tone JS Piano App
        </p>
        <p class="project-description-mobile d-flex d-md-none p-2">
          Tone JS Piano App
        </p>
      </a>
    </div>
  </div>
</template>

<style scoped></style>

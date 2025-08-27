<script setup lang="ts">
  import { ref } from 'vue'
  import DarkModeToggler from '@/components/DarkModeToggler.vue'

  const toggleState = ref(false)
  const emits = defineEmits(['toggle'])

  function borderAnimation(e: any) {
    e.target.nextSibling.classList.add('border-animation-large-active')
  }

  function animationLeave(e: any) {
    e.target.nextSibling.classList.remove('border-animation-large-active')
  }

  function handleToggle(value: boolean) {
    toggleState.value = value
    emits('toggle', toggleState.value)
  }

  function scrollToElement(elementId: string) {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
</script>

<template>
  <div class="navbar-large d-none d-md-flex align-items-center justify-content-between px-3 mt-4">
    <div class="brand">
  <!-- <div class="avatar-image-large" aria-hidden="true"></div> -->
  <img src="../../../assets/et-logo.svg" alt="Eric Tarter logo, stylized ET with tree and moon" width="100" height="100" loading="lazy" />
    </div>
    <div class="nav-items d-flex align-items-center justify-content-end flex-wrap">
      <div class="d-flex flex-column mx-1">
        <a
          @mouseenter="borderAnimation"
          @mouseleave="animationLeave"
          href="#skills-section"
          class="nav-item mx-1"
          >Skills</a
        >
        <div class="border-animation-large"></div>
      </div>
      <div class="d-flex flex-column mx-1">
        <a
          @mouseenter="borderAnimation"
          @mouseleave="animationLeave"
          href="#proj-section"
          class="nav-item mx-1"
          >Projects</a
        >
        <div class="border-animation-large"></div>
      </div>
      <div class="d-flex flex-column mx-1">
        <a
          @mouseenter="borderAnimation"
          @mouseleave="animationLeave"
          href="#poll-section"
          class="nav-item mx-1"
          >Community</a
        >
        <div class="border-animation-large"></div>
      </div>
      <div class="d-flex flex-column mx-1">
        <a
          @mouseenter="borderAnimation"
          @mouseleave="animationLeave"
          href="#footer-section"
          class="nav-item mx-1"
          >Find Me</a
        >
        <div class="border-animation-large"></div>
      </div>
      <DarkModeToggler
        class="d-flex align-items-center nav-item mx-1"
        @toggle="handleToggle" />
    </div>
  </div>
</template>

<style scoped>
  img {
    width: 100px;
    height: 100px;
    opacity: 1;
    /* position: absolute; */
    top: 0;
    transform: translateX(-10px) !important;
    border-radius: 50%;
  }

  a {
    cursor: pointer;
  }
</style>

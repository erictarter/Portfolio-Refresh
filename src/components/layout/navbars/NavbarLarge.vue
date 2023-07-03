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
</script>

<template>
  <div class="navbar-large d-none d-md-flex align-items-center px-5 mt-5">
    <div class="brand w-75">
      <!-- <div class="avatar-image-large"></div> -->
      <img src="../../../assets/logo.png" alt="" />
    </div>
    <div class="nav-items d-flex justify-content-between">
      <div class="d-flex flex-column mx-2">
        <a
          @mouseenter="borderAnimation"
          @mouseleave="animationLeave"
          href="#/$"
          class="nav-item mx-2"
          >Bio</a
        >
        <div class="border-animation-large"></div>
      </div>
      <div class="d-flex flex-column mx-2">
        <a
          @mouseenter="borderAnimation"
          @mouseleave="animationLeave"
          href="#/*"
          class="nav-item mx-2"
          >Projects</a
        >
        <div class="border-animation-large"></div>
      </div>
      <div class="d-flex flex-column mx-2">
        <a
          @mouseenter="borderAnimation"
          @mouseleave="animationLeave"
          href="#/"
          class="nav-item mx-2"
          >Blog</a
        >
        <div class="border-animation-large"></div>
      </div>
      <div class="d-flex flex-column">
        <a
          @mouseenter="borderAnimation"
          @mouseleave="animationLeave"
          href="#/"
          class="nav-item mx-2"
          >Socials</a
        >
        <div class="border-animation-large"></div>
      </div>
      <DarkModeToggler
        class="d-flex align-items-center nav-item mx-2"
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
</style>

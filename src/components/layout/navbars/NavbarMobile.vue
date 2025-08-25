<script setup lang="ts">
  import { ref } from 'vue'
  import DarkModeToggler from '@/components/DarkModeToggler.vue'

  const toggleState = ref(false)
  const darkModeToggle = ref(false)
  const emits = defineEmits(['toggle'])

  function navToggle() {
    toggleState.value = !toggleState.value
  }
  function borderAnimation(e: any) {
    e.target.nextSibling.classList.add('border-animation-active')
  }
  function animationLeave(e: any) {
    e.target.nextSibling.classList.remove('border-animation-active')
  }

  function handleToggle(value: boolean) {
    darkModeToggle.value = value
    setTimeout(() => {
      emits('toggle', darkModeToggle.value)
    }, 100)
  }

  function closeNav() {
    toggleState.value = false
  }

  function scrollToElement(elementId: string) {
    navToggle()
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
</script>

<template>
  <div class="d-flex flex-column d-md-none my-3">
    <div class="d-flex justify-content-between align-items-center w-100 px-3">
      <div>
        <i
          @click="navToggle"
          :class="
            !toggleState
              ? 'lni lni-menu menu-toggle toggle-closed'
              : 'lni lni-close menu-toggle toggle-opened'
          "></i>
      </div>
      <div class="brand">
        <!-- <div class="avatar-image"></div> -->
        <img src="../../../assets/et-logo.svg" alt="ET Logo" />
      </div>
    </div>
    <div
      :class="
        toggleState
          ? 'navbar-mobile navbar-mobile-opened p-3'
          : 'navbar-mobile navbar-mobile-closed'
      ">
      <div
        :class="
          toggleState
            ? 'nav-items-show d-flex flex-column justify-content-start'
            : 'nav-items-hide'
        ">
        <div class="d-flex flex-column mx-2">
          <a
            @click="scrollToElement('skills-section')"
            @mouseenter="borderAnimation"
            @mouseleave="animationLeave"
            class="nav-item my-2"
            >Skills</a
          >
          <div class="border-animation mx-2"></div>
        </div>
        <div class="d-flex flex-column mx-2">
          <a
            @click="scrollToElement('proj-section')"
            @mouseenter="borderAnimation"
            @mouseleave="animationLeave"
            href="#/*"
            class="nav-item my-2"
            >Projects</a
          >
          <div class="border-animation mx-2"></div>
        </div>
        <div class="d-flex flex-column mx-2">
          <a
            @click="scrollToElement('poll-section')"
            @mouseenter="borderAnimation"
            @mouseleave="animationLeave"
            href="#/"
            class="nav-item my-2"
            >Community</a
          >
          <div class="border-animation mx-2"></div>
        </div>
        <div class="d-flex flex-column mx-2">
          <a
            @click="scrollToElement('footer-section')"
            @mouseenter="borderAnimation"
            @mouseleave="animationLeave"
            href="#/"
            class="nav-item my-2"
            >Find Me</a
          >
          <div class="border-animation mx-2"></div>
        </div>
        <div class="d-flex flex-column mx-2">
          <DarkModeToggler
            class="ps-1 m-2"
            @click="closeNav"
            @toggle="handleToggle" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  img {
    width: 75px;
    height: 75px;
    opacity: 1;
    /* position: absolute; */
    top: 0;
    transform: translateX(-10px);
    border-radius: 50%;
  }
</style>

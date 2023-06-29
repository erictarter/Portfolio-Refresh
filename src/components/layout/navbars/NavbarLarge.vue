<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    methods: {
      borderAnimation(e: any) {
        e.target.nextSibling.classList.add('border-animation-large-active')
      },
      animationLeave(e: any) {
        e.target.nextSibling.classList.remove('border-animation-large-active')
      }
    }
  })
</script>

<template>
  <div class="navbar-large d-none d-md-flex align-items-center p-5">
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
    </div>
  </div>
</template>

<style scoped>
  img {
    width: 230px;
    height: 230px;
    opacity: 1;
    /* position: absolute; */
    top: 0;
    transform: translate(-75px, -35px) !important;
  }
</style>

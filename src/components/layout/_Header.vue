<script setup lang="ts">
import NavbarLarge from './navbars/NavbarLarge.vue'
import NavbarMobile from './navbars/NavbarMobile.vue'

</script>

<template>
      <div class="nav-section">
            <NavbarLarge />
            <NavbarMobile />
            <!-- <kinesis-container event='move'>
                  <kinesis-element type="rotate" :strength="10">
                  <img
                  class="mt-5 image"
                  src="https://source.unsplash.com/500x350/?japan"
                  alt="Cell"
                  />
                  </kinesis-element>
            </kinesis-container> -->
      </div>
</template>

<style scoped>
</style>

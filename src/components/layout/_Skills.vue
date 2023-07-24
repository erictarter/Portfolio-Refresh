<script setup lang="ts">
  defineProps<{
    darkMode: boolean
  }>()
</script>

<template>
  <div class="skills-section mt-5 mx-5">
    <div v-if="darkMode" class="shiny"></div>
    <div
      class="skills d-flex justify-content-between align-items-center px-2 mt-4">
      <v-icon class="mx-md-3 mx-2 skill-icon" name="io-logo-vue" />
      <v-icon class="mx-md-3 mx-2 skill-icon" name="co-react" />
      <v-icon class="mx-md-3 mx-2 skill-icon" name="co-sass-alt" />
      <v-icon class="mx-md-3 mx-2 skill-icon" name="co-css3" />
      <v-icon class="mx-md-3 mx-2 skill-icon" name="la-html5" />
      <v-icon class="mx-md-3 mx-2 skill-icon" name="co-javascript" />
    </div>
  </div>
</template>

<style scoped>
  .shiny {
    width: 100%;
    height: 2.8rem;
    position: absolute;
    background-color: hsla(330deg, 95%, 83%, 0.3);
    border-radius: 6px;
    box-shadow: 0 0 14px 0 rgb(255, 255, 255);
  }
</style>

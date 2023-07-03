<script setup lang="ts">
  import NavbarLarge from './navbars/NavbarLarge.vue'
  import NavbarMobile from './navbars/NavbarMobile.vue'
  import { ref } from 'vue'

  const toggleState = ref(false)
  const emits = defineEmits(['toggle'])

  function handleToggle(value: boolean) {
    toggleState.value = value
    emits('toggle', toggleState.value)
  }
</script>

<template>
  <div class="nav-section">
    <NavbarLarge @toggle="handleToggle" />
    <NavbarMobile />
  </div>
</template>

<style scoped></style>

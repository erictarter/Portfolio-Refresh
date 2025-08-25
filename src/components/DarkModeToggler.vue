<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'

  const toggleState = ref(false)
  const emits = defineEmits(['toggle'])

  function darkModeToggle() {
    toggleState.value = !toggleState.value
    emits('toggle', toggleState.value)
    localStorage.setItem('darkMode', toggleState.value.toString())
  }

  onMounted(() => {
    if (
      localStorage.getItem('darkMode') &&
      localStorage.getItem('darkMode') === 'true'
    ) {
      darkModeToggle()
    }
  })
</script>

<template>
  <div @click="darkModeToggle" class="dark-mode-toggler">
    <div class="switch d-flex align-items-center px-1">
      <i
        :class="
          !toggleState ? 'lni lni-sun sun' : 'lni lni-night night toggled'
        "></i>
    </div>
  </div>
</template>

<style scoped>
  .dark-mode-toggler {
    cursor: pointer;
  }
  .switch {
    border: 2px solid hsla(329, 40%, 85%, 0.9);
    width: 4.5rem;
    height: 70%;
    border-radius: 20px;
    background-color: rgb(222, 221, 232);
  }
  i {
    font-size: 18px;
    border-radius: 50%;
    transition: 0.2s ease all;
  }

  .toggled {
    margin-left: 58.5%;
    transition: 0.2s ease all;
  }
  .night {
    color: rgb(146, 149, 243);
    background-color: hsl(252, 61%, 14%);
    padding: 0.2em;
  }
  .sun {
    color: rgb(220, 192, 51);
    padding: 0.2em;
    background-color: hsl(236, 100%, 61%);
  }

  @media (max-width: 768px) {
    .dark-mode-toggler {
      margin-left: 0;
      padding-left: 0;
    }
    .switch {
      height: 100%;
    }
  }
</style>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({})
</script>

<template>
  <div class="poll px-5 mt-5">
    <button
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      class="w-100 text-center p-4 fs-5 fw-bold open-poll-modal">
      What is your favorite framework?
    </button>
  </div>
</template>

<style scoped>
  button {
    border-radius: 6px;
    border: none;
    background-color: #262e36;
    color: hsla(329deg, 89%, 80%, 0.7);
    transition: 0.2s ease all;
    opacity: 0.9;
  }

  button:hover {
    opacity: 1;
    transform: scale(1.03);
    transition: 0.2s ease all;
    box-shadow: hsla(329, 89%, 80%, 0.4) 5px 5px,
      hsla(329, 89%, 80%, 0.3) 10px 10px, hsla(329, 89%, 80%, 0.2) 15px 15px;
  }
</style>

<script lang="ts">
  import { ref, onMounted } from 'vue'
  import { defineComponent } from 'vue'
  export default defineComponent({})

  const answered = ref(false)

  onMounted(() => {})
</script>

<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content p-4">
        <div class="modal-body">
          <h2>What is your favorite framwork?</h2>
          <div class="poll d-flex flex-column">
            <button class="my-1">Vue</button>
            <button class="my-1">React</button>
            <button class="my-1">Angular</button>
            <button class="my-1">Other</button>
          </div>
          <div class="poll-answered">show results if answered</div>
        </div>
      </div>
      <!-- <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal">
            Close
          </button>
        </div> -->
    </div>
  </div>
</template>

<style scoped></style>

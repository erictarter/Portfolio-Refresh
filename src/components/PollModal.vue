<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import axios from 'axios'

  const hasvoted = ref(false)

  function checkLocalStorage() {
    if (localStorage.getItem('hasVoted') === 'yes') {
      hasvoted.value = true
    } else {
      hasvoted.value = false
    }
  }

  function voteVue() {
    localStorage.setItem('hasVoted', 'yes')
    checkLocalStorage()
  }

  function voteReact() {
    localStorage.setItem('hasVoted', 'yes')
    checkLocalStorage()
  }

  function voteAngular() {
    localStorage.setItem('hasVoted', 'yes')
    checkLocalStorage()
  }

  function voteOther() {
    localStorage.setItem('hasVoted', 'yes')
    checkLocalStorage()
  }

  function changeVote() {
    localStorage.setItem('hasVoted', 'no')
    checkLocalStorage()
  }

  onMounted(() => {
    checkLocalStorage()
  })
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
          <div v-if="!hasvoted" class="vote-container">
            <h2>What is your favorite framwork?</h2>
            <div class="poll d-flex flex-column">
              <button @click="voteVue" class="my-1">Vue</button>
              <button @click="voteReact" class="my-1">React</button>
              <button @click="voteAngular" class="my-1">Angular</button>
              <button @click="voteOther" class="my-1">Other</button>
            </div>
          </div>
          <div v-else class="poll-answered">
            <h1>Show Results</h1>
            <button @click="changeVote" class="my-1">change vote</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

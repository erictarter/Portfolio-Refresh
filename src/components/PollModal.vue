<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  const vueVotes = ref(0)
  const reactVotes = ref(0)
  const angularVotes = ref(0)
  const otherVotes = ref(0)
  import axios from 'axios'

  const hasvoted = ref(false)

  function updatePoll() {
    console.log(
      vueVotes.value,
      reactVotes.value,
      angularVotes.value,
      otherVotes.value
    )
  }

  function getCounterData() {
    axios
      .get('http://localhost:3004/count/all')
      .then((response) => {
        const data = response.data
        vueVotes.value = data.vueCounter
        reactVotes.value = data.reactCounter
        angularVotes.value = data.angularCounter
        otherVotes.value = data.otherCounter
        updatePoll()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function checkLocalStorage() {
    if (localStorage.getItem('hasVoted') === 'yes') {
      hasvoted.value = true
    } else {
      hasvoted.value = false
    }
  }

  function decrementVote(url: string, oldVote: string) {
    if (oldVote === 'vue') {
      axios
        .get(url)
        .then((response) => {
          const counter = response.data.vueCounter
          vueVotes.value = counter
        })
        .catch((error) => {
          console.log(error)
        })
    } else if (oldVote === 'react') {
      axios
        .get(url)
        .then((response) => {
          const counter = response.data.reactCounter
          reactVotes.value = counter
        })
        .catch((error) => {
          console.log(error)
        })
    } else if (oldVote === 'angular') {
      axios
        .get(url)
        .then((response) => {
          const counter = response.data.angularCounter
          angularVotes.value = counter
        })
        .catch((error) => {
          console.log(error)
        })
    } else if (oldVote === 'other') {
      axios
        .get(url)
        .then((response) => {
          const counter = response.data.otherCounter
          otherVotes.value = counter
        })
        .catch((error) => {
          console.log(error)
        })
    }
    localStorage.setItem('voteType', '')
  }

  function removeVote() {
    console.log(localStorage.getItem('voteType'))
    if (localStorage.getItem('voteType') === 'vue') {
      decrementVote('http://localhost:3004/vuecounter/decrement', 'vue')
    } else if (localStorage.getItem('voteType') === 'react') {
      decrementVote('http://localhost:3004/reactcounter/decrement', 'react')
    } else if (localStorage.getItem('voteType') === 'angular') {
      decrementVote('http://localhost:3004/angularcounter/decrement', 'angular')
    } else if (localStorage.getItem('voteType') === 'other') {
      decrementVote('http://localhost:3004/othercounter/decrement', 'other')
    }
  }

  function voteVue() {
    localStorage.setItem('hasVoted', 'yes')
    localStorage.setItem('voteType', 'vue')

    checkLocalStorage()
    axios
      .get('http://localhost:3004/vuecounter/increment')
      .then((response) => {
        const counter = response.data.vueCounter
        vueVotes.value = counter
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function voteReact() {
    localStorage.setItem('hasVoted', 'yes')
    localStorage.setItem('voteType', 'react')
    checkLocalStorage()
    axios
      .get('http://localhost:3004/reactcounter/increment')
      .then((response) => {
        const counter = response.data.reactCounter
        reactVotes.value = counter
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function voteAngular() {
    localStorage.setItem('hasVoted', 'yes')
    localStorage.setItem('voteType', 'angular')
    checkLocalStorage()
    axios
      .get('http://localhost:3004/angularcounter/increment')
      .then((response) => {
        const counter = response.data.angularCounter
        angularVotes.value = counter
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function voteOther() {
    localStorage.setItem('hasVoted', 'yes')
    localStorage.setItem('voteType', 'other')
    checkLocalStorage()
    axios
      .get('http://localhost:3004/othercounter/increment')
      .then((response) => {
        const counter = response.data.otherCounter
        otherVotes.value = counter
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function changeVote() {
    localStorage.setItem('hasVoted', 'no')
    checkLocalStorage()
    removeVote()
  }

  onMounted(() => {
    checkLocalStorage()
    getCounterData()
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
            <div class="results">vue votes - {{ vueVotes }}</div>
            <div class="results">react votes - {{ reactVotes }}</div>
            <div class="results">angular votes - {{ angularVotes }}</div>
            <div class="results">other votes - {{ otherVotes }}</div>
            <button @click="changeVote" class="my-1">change vote</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

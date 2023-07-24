<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue'
  import axios from 'axios'
  const vueVotes = ref(0)
  const reactVotes = ref(0)
  const angularVotes = ref(0)
  const otherVotes = ref(0)
  const totalVotes = ref(0)

  const hasVoted = ref(false)

  function getPercentageWidth(votes: number): string {
    const total = totalVotes.value || 1
    const percentage = (votes / total) * 100
    return percentage.toFixed(1) + '%'
  }

  const vuePercentageWidth = ref('0%')
  const reactPercentageWidth = ref('0%')
  const angularPercentageWidth = ref('0%')
  const otherPercentageWidth = ref('0%')

  function updatePoll() {
    getTotalVotes()
  }

  function getCounterData() {
    axios
      .get('https://complete-olive-magnesium.glitch.me/count/all')
      .then((response: any) => {
        const data = response.data
        vueVotes.value = data.vueCounter
        reactVotes.value = data.reactCounter
        angularVotes.value = data.angularCounter
        otherVotes.value = data.otherCounter
        updatePoll()
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  function getTotalVotes() {
    totalVotes.value =
      vueVotes.value + reactVotes.value + angularVotes.value + otherVotes.value
  }

  function checkLocalStorage() {
    if (localStorage.getItem('hasVoted') === 'yes') {
      hasVoted.value = true
    } else {
      hasVoted.value = false
    }
    getTotalVotes()
  }

  function decrementVote(url: string, oldVote: string) {
    if (oldVote === 'vue') {
      axios
        .get(url)
        .then((response: any) => {
          const counter = response.data.vueCounter
          vueVotes.value = counter
        })
        .catch((error: any) => {
          console.log(error)
        })
    } else if (oldVote === 'react') {
      axios
        .get(url)
        .then((response: any) => {
          const counter = response.data.reactCounter
          reactVotes.value = counter
        })
        .catch((error: any) => {
          console.log(error)
        })
    } else if (oldVote === 'angular') {
      axios
        .get(url)
        .then((response: any) => {
          const counter = response.data.angularCounter
          angularVotes.value = counter
        })
        .catch((error: any) => {
          console.log(error)
        })
    } else if (oldVote === 'other') {
      axios
        .get(url)
        .then((response: any) => {
          const counter = response.data.otherCounter
          otherVotes.value = counter
        })
        .catch((error: any) => {
          console.log(error)
        })
    }
    localStorage.setItem('voteType', '')
    getTotalVotes()
  }

  function removeVote() {
    if (localStorage.getItem('voteType') === 'vue') {
      decrementVote(
        'https://complete-olive-magnesium.glitch.me/vuecounter/decrement',
        'vue'
      )
    } else if (localStorage.getItem('voteType') === 'react') {
      decrementVote(
        'https://complete-olive-magnesium.glitch.me/reactcounter/decrement',
        'react'
      )
    } else if (localStorage.getItem('voteType') === 'angular') {
      decrementVote(
        'https://complete-olive-magnesium.glitch.me/angularcounter/decrement',
        'angular'
      )
    } else if (localStorage.getItem('voteType') === 'other') {
      decrementVote(
        'https://complete-olive-magnesium.glitch.me/othercounter/decrement',
        'other'
      )
    }
  }

  function voteVue() {
    localStorage.setItem('hasVoted', 'yes')
    localStorage.setItem('voteType', 'vue')

    checkLocalStorage()
    axios
      .get('https://complete-olive-magnesium.glitch.me/vuecounter/increment')
      .then((response: any) => {
        const counter = response.data.vueCounter
        vueVotes.value = counter
        getTotalVotes()
        animateResults()
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  function voteReact() {
    localStorage.setItem('hasVoted', 'yes')
    localStorage.setItem('voteType', 'react')
    checkLocalStorage()
    axios
      .get('https://complete-olive-magnesium.glitch.me/reactcounter/increment')
      .then((response: any) => {
        const counter = response.data.reactCounter
        reactVotes.value = counter
        getTotalVotes()
        animateResults()
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  function voteAngular() {
    localStorage.setItem('hasVoted', 'yes')
    localStorage.setItem('voteType', 'angular')
    checkLocalStorage()
    axios
      .get(
        'https://complete-olive-magnesium.glitch.me/angularcounter/increment'
      )
      .then((response: any) => {
        const counter = response.data.angularCounter
        angularVotes.value = counter
        getTotalVotes()
        animateResults()
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  function voteOther() {
    localStorage.setItem('hasVoted', 'yes')
    localStorage.setItem('voteType', 'other')
    checkLocalStorage()
    axios
      .get('https://complete-olive-magnesium.glitch.me/othercounter/increment')
      .then((response: any) => {
        const counter = response.data.otherCounter
        otherVotes.value = counter
        getTotalVotes()
        animateResults()
      })
      .catch((error: any) => {
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
    animateResults()
  })

  function animateResults() {
    vuePercentageWidth.value = '0%'
    reactPercentageWidth.value = '0%'
    angularPercentageWidth.value = '0%'
    otherPercentageWidth.value = '0%'
    setTimeout(() => {
      vuePercentageWidth.value = getPercentageWidth(vueVotes.value)
      reactPercentageWidth.value = getPercentageWidth(reactVotes.value)
      angularPercentageWidth.value = getPercentageWidth(angularVotes.value)
      otherPercentageWidth.value = getPercentageWidth(otherVotes.value)
    }, 250)
  }

  watch(hasVoted, () => animateResults())
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
        <button
          type="button"
          class="close-modal"
          data-bs-dismiss="modal"
          aria-label="Close">
          <i class="lni lni-close"></i>
        </button>
        <div
          class="modal-body d-flex align-items-center justify-content-center">
          <transition name="fade" mode="out-in">
            <template v-if="!hasVoted">
              <div class="vote-container" key="vote">
                <h2 class="text-center">What is your favorite framework?</h2>
                <div
                  class="poll d-flex flex-column align-items-center mt-4 mt-2-lg">
                  <div
                    class="my-lg-2 mt-2 mt-0-lg d-flex d-lg-block flex-column">
                    <button @click="voteVue" class="my-1 mx-2 btn-green">
                      Vue
                    </button>
                    <button @click="voteReact" class="my-1 mx-2 btn-blue">
                      React
                    </button>
                  </div>
                  <div class="d-flex d-lg-block flex-column">
                    <button @click="voteAngular" class="my-1 mx-2 btn-red">
                      Angular
                    </button>
                    <button @click="voteOther" class="my-1 mx-2 btn-yellow">
                      Svelte
                    </button>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="poll-answered w-100" key="poll">
                <div class="total-votes mb-3">
                  Total Votes: {{ totalVotes }}
                </div>
                <div class="result">
                  <div class="label">Vue - {{ vuePercentageWidth }}</div>
                  <div class="track">
                    <div
                      class="filled"
                      :style="{ width: vuePercentageWidth }"></div>
                  </div>
                </div>
                <div class="result">
                  <div class="label">React - {{ reactPercentageWidth }}</div>

                  <div class="track">
                    <div
                      class="filled"
                      :style="{ width: reactPercentageWidth }"></div>
                  </div>
                </div>
                <div class="result">
                  <div class="label">
                    Angular - {{ angularPercentageWidth }}
                  </div>

                  <div class="track">
                    <div
                      class="filled"
                      :style="{ width: angularPercentageWidth }"></div>
                  </div>
                </div>
                <div class="result">
                  <div class="label">Svelte - {{ otherPercentageWidth }}</div>
                  <div class="track">
                    <div
                      class="filled"
                      :style="{ width: otherPercentageWidth }"></div>
                  </div>
                </div>
              </div>
            </template>
          </transition>
        </div>
        <transition name="fade" mode="out-in">
          <button v-if="hasVoted" @click="changeVote" class="my-1 change-vote">
            CHANGE VOTE
          </button>
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .modal-body {
    height: 12.5rem;
  }

  .poll {
    button {
      border-radius: 20px;
      width: 14rem;
      border: 2px solid #736969;
      padding: 0.45em;
      background-color: #fff;
      font-weight: bold;
      color: #736969 !important;
    }
    .btn-green {
      box-shadow: 0 0 8px 0 rgba(65, 184, 131, 1);
      transition: 0.2s ease all;
    }
    .btn-green:hover {
      box-shadow: 0 0 14px 0 rgba(65, 184, 131, 1);
      transition: 0.2s ease all;
    }
    .btn-blue {
      box-shadow: 0 0 8px 0 rgba(97, 218, 251, 1);
      transition: 0.2s ease all;
    }
    .btn-blue:hover {
      box-shadow: 0 0 14px 0 rgba(97, 218, 251, 1);
      transition: 0.2s ease all;
    }
    .btn-red {
      box-shadow: 0 0 8px 0 rgba(221, 0, 49, 1);
      transition: 0.2s ease all;
    }
    .btn-red:hover {
      box-shadow: 0 0 14px 0 rgba(221, 0, 49, 1);
      transition: 0.2s ease all;
    }
    .btn-yellow {
      box-shadow: 0 0 8px 0 #ff5722;
      transition: 0.2s ease all;
    }
    .btn-yellow:hover {
      box-shadow: 0 0 14px 0 rgb(221, 92, 0);
      transition: 0.2s ease all;
    }
  }

  .modal-content {
    position: relative;
    min-height: 375px;
  }

  .change-vote {
    position: absolute;
    bottom: 0.5em;
    right: 1em;
    border-radius: 4px;
    border: none;
    background-color: rgb(233, 191, 237);
    color: #fff;
    padding: 0.5em 1.5em;
    font-weight: bold;
    transition: 0.2s ease all;
  }
  .change-vote:hover {
    background-color: rgb(212, 166, 216);
    box-shadow: 0 0 8px 0 rgb(166, 144, 165);
    transition: 0.2s ease all;
  }

  .track {
    background-color: #e8e6e6;
    height: 24px;
    margin-bottom: 0.35em;
    border-radius: 4px;
  }
  .filled {
    background-color: hsla(329deg, 89%, 80%, 0.3);
    height: 100%;
    transition: 2.5s ease width;
  }
  .poll-answered {
    transform: translateY(-1.5em);

    .label {
      margin-bottom: 0.15em;
    }
  }

  .close-modal {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    border: none;
    background-color: #fff6f4;
    transition: 0.2s ease all;
  }

  .close-modal:hover {
    background-color: #ffeae6;
    transition: 0.2s ease all;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-leave,
  .fade-enter {
    opacity: 1;
  }
</style>

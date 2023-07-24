<script setup lang="ts">
  import Header from './components/layout/_Header.vue'
  import Bio from './components/layout/_Bio.vue'
  import Projects from './components/layout/_Projects.vue'
  import Poll from './components/_Poll.vue'
  import Skills from './components/layout/_Skills.vue'
  import Blog from './components/layout/_Blog.vue'
  import Credit from './components/_Credit.vue'
  import Footer from './components/layout/_Footer.vue'
  import PollModal from './components/PollModal.vue'

  import { ref } from 'vue'

  const toggleState = ref(false)

  function handleToggle(value: boolean) {
    toggleState.value = value
  }
</script>

<template>
  <div :class="toggleState ? 'night-mode-wrapper' : ''">
    <Header @toggle="handleToggle" />
    <Bio />
    <Projects />
    <Poll />
    <Skills :darkMode="toggleState" />
    <Blog />
    <Credit />
    <Footer />
    <PollModal />
  </div>

  <div :class="toggleState ? 'night-mode' : 'day-mode'"></div>
</template>

<style scoped>
  header {
    line-height: 1.5;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
</style>

<!-- TO BE CONTINUED - 
  MONITOR POLL - how to refresh it??, 
  WRITE NEW BLOGS - IDEAS(NODE EXPRESS POLL PROJECT FOR BEGINNERS, ...)
  DO ANOTHER PROJECT WITH NODE EXPRESS - NFL PICK TRACKER - USING API FOR FRIENDS??
  EXPLORE USING NEW FONT - CURRENT ONE IS GENERIC,
  DO SOMETHING COOL WITH THE SKILLS BAR - ANIMATION OR SOMETHING, - ADD GLOW FOR DARK MODE
  GET TS ICON
  ADD LOGO TO BLOG
-->

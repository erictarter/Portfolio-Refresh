<script setup lang="ts">
import Header from './components/layout/_Header.vue'
import Bio from './components/layout/_Bio.vue'
import Projects from './components/layout/_Projects.vue'
import Skills from './components/layout/_Skills.vue'
import Blog from './components/layout/_Blog.vue'
import Footer from './components/layout/_Footer.vue'
</script>

<template>
      <Header></Header>
      <Bio />
      <Projects />
      <Skills />
      <Blog />
      <Footer />
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

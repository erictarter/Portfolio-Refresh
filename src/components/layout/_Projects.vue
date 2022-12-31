<script lang="ts">
import { defineComponent } from 'vue'

  export default defineComponent({

    methods: {
      showOverlay(e:any){
        e.target.children[0].classList.add('project-overlay-show')
      },
      hideOverlay(e:any){
        e.target.children[0].classList.remove('project-overlay-show')
      },
      showMoreProjects(e:any) {
        document.querySelectorAll('.more-project').forEach(i => {
          i.classList.add('more-project-show')
        })
        e.target.classList.add('hide-btn')
      }
    }
})
</script>

<template>
      <div class="projects-section px-5" id="/*">
        <h2 class="mb-4">Projects</h2>
            <div class="projects">
            <a @mouseenter="showOverlay" @mouseleave="hideOverlay" target="_blank" href="https://goofy-ritchie-d401d6.netlify.app/" class="project">
              <div class="project-overlay d-none d-md-flex"></div>
              <p class="fs-5 project-description-lg d-none px-3 d-md-flex">Sports Betting App. Fill out a betslip and place a hypothetical bet</p>
              <p class="project-description-mobile d-flex d-md-none p-2">Sports Betting App</p>
            </a>
            <a @mouseenter="showOverlay" @mouseleave="hideOverlay" target="_blank" href="https://mystifying-mahavira-4e8faa.netlify.app/" class="project">
              <div class="project-overlay d-none d-md-flex"></div>
              <p class="fs-5 project-description-lg d-none px-3 d-md-flex">Online Sunglasses Store with shopping cart</p>
              <p class="project-description-mobile d-flex d-md-none p-2">Online Store W/shopping cart</p>
            </a>
            <a @mouseenter="showOverlay" @mouseleave="hideOverlay" target="_blank" href="https://gifted-kepler-32c70b.netlify.app/" class="project">
              <div class="project-overlay d-none d-md-flex"></div>
              <p class="fs-5 project-description-lg d-none px-3 d-md-flex">Find Out how much house you can afford in this questionaire</p>
              <p class="project-description-mobile d-flex d-md-none p-2">Home Budget</p>            
            </a>
            <a href="#/#" @click='showMoreProjects' class="show-more-projects btn d-none p-2 fs-6">Show More</a>
            <a @mouseenter="showOverlay" @mouseleave="hideOverlay" target="_blank" href="https://tender-feynman-0a5def.netlify.app/" class="project more-project" id="/#">
              <div class="project-overlay d-none d-md-flex"></div>
              <p class="fs-5 project-description-lg px-3 d-none d-md-flex">Get up to date covid data from the Covid Tracking Data API</p>
              <p class="project-description-mobile d-flex d-md-none p-2">Covid Data</p>              
            </a>
            <a @mouseenter="showOverlay" @mouseleave="hideOverlay" target="_blank" href="https://heuristic-newton-d525bc.netlify.app/" class="project more-project">
              <div class="project-overlay d-none d-md-flex"></div>
              <p class="fs-5 project-description-lg d-none px-3 d-md-flex">Test your NBA knowledge with this quiz</p>
              <p class="project-description-mobile d-flex d-md-none p-2">NBA Quiz</p>             
            </a>
            <a @mouseenter="showOverlay" @mouseleave="hideOverlay" target="_blank" href="https://affectionate-booth-7c6f42.netlify.app/" class="project more-project">
              <div class="project-overlay d-none d-md-flex"></div>
              <p class="fs-5 project-description-lg d-none px-3 d-md-flex">Play around on this Tone JS Piano App</p>
              <p class="project-description-mobile d-flex d-md-none p-2">Tone JS Piano App</p>   
            </a>
          </div>
      </div>
</template>

<style scoped>
</style>

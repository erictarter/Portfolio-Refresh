<script lang="ts">
import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
        return {
        toggleState: false
    }
  },

  methods: {
    navToggle(){
        this.toggleState = !this.toggleState
    },
    borderAnimation(e:any){
        e.target.nextSibling.classList.add('border-animation-active')
    },
    animationLeave(e:any){
        e.target.nextSibling.classList.remove('border-animation-active')
    }
  }
})
</script>

<template>
      <div class="d-flex flex-column d-md-none">
        <div class="d-flex justify-content-between w-100 p-5">
            <div class="brand">
                <div class="avatar-image"></div>
            </div>
            <div>
            <i @click="navToggle" :class="!toggleState ? 'lni lni-menu menu-toggle toggle-closed' : 'lni lni-close menu-toggle toggle-opened'"></i>
            </div>
        </div>
        <div :class="toggleState ? 'navbar-mobile navbar-mobile-opened p-3' : 'navbar-mobile navbar-mobile-closed'">
            <div :class="toggleState ? 'nav-items-show d-flex flex-column justify-content-around' : 'nav-items-hide'">
                <div class="d-flex flex-column mx-2">
                  <a @click="navToggle" @mouseenter="borderAnimation" @mouseleave="animationLeave" href="#" class="nav-item my-2">Bio</a>
                  <div class="border-animation mx-2"></div>
                </div>
                <div class="d-flex flex-column mx-2">                    
                  <a @click="navToggle" @mouseenter="borderAnimation" @mouseleave="animationLeave" href="#" class="nav-item my-2">Projects</a>
                  <div class="border-animation mx-2"></div>  
                </div>
                <div class="d-flex flex-column mx-2">                  
                  <a @click="navToggle" @mouseenter="borderAnimation" @mouseleave="animationLeave" href="#" class="nav-item my-2">Blog</a>
                  <div class="border-animation mx-2"></div>  
                </div>
                <div class="d-flex flex-column mx-2">                  
                  <a @click="navToggle" @mouseenter="borderAnimation" @mouseleave="animationLeave" href="#" class="nav-item my-2">Socials</a>
                  <div class="border-animation mx-2"></div> 
                </div>                   
            </div>
      </div>
      </div>
</template>

<style scoped>
</style>

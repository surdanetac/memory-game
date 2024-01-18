<template>
  <div>
    <div class="flex justify-center">
      <starter-component v-show="!player" @setPlayer="setPlayer"/>
    </div>
    <div class="mx-auto max-w-3xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8 flex justify-evenly">
      <head-component v-show="player" :name="name" :counters="score"/>
      <div class="flex-col w-1/4" style="display: flex">
        <button v-show="player" class="flex-none rounded-md h-max bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" @click="deletePlayer()"> Logout </button>
        <button v-show="gameOver" class="flex-none rounded-md h-max bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" @click="startOver()"> Play Again </button>
      </div>
    </div>
    <play-component v-if="showPlayComponent()" @updatePlay="updateScore"/>
  </div>
</template>

<script>
import PlayComponent from '@/components/PlayComponent.vue'
import StarterComponent from '../components/StarterComponent.vue'
import HeadComponent from '@/components/HeadComponent.vue'
export default {
  components: { StarterComponent, PlayComponent, HeadComponent },
  name: 'starter-view',
  data() {
    return {
      name: '',
      player: false,
      play: false,
      gameOver: false,
      counters: {},
      score: {}
    }
  },
  mounted () {
    this.getPlayer()
  },
  methods: {
     setPlayer (data) {
      localStorage.setItem('player', data)
      this.name = data
      this.player = true
    },
    getPlayer () {
      if (localStorage.getItem('player') !== null) { 
        this.name = localStorage.getItem('player')
        this.player = true
      }
    },
    deletePlayer () {
      localStorage.removeItem('player')
      this.name = ''
      this.player = false
    },
    // updatePlay(data) {
    //   this.gameOver = !data
    // },
     updateScore(data) {
      this.score = { ...data.counters }
      this.gameOver = data.gameOver
    },
    startOver() {
      this.gameOver = false
      this.getPlayer()
    },
    showPlayComponent() {
      if (this.player && !this.gameOver) return true
      else if (this.player && this.gameOver) return false
    }
  },
}
</script>
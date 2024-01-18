<template>
  <div>
    <div v-show="!player" class="flex justify-center container-starter">
      <starter-component @setPlayer="setPlayer"/>
    </div>
    <div v-show="player" class="mx-auto max-w-3xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8 flex justify-evenly bg-white rounded-md container-head">
      <head-component v-show="player" :name="name" :counters="score"/>
      <div class="flex-col w-1/4 container-buttons mt-4" style="display: flex">
        <button v-show="player" class="flex-none rounded-md h-max bg-green-700 px-3.5 py-2.5 text-sm text-white font-semibold shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700" @click="deletePlayer()"> Logout </button>
        <button v-show="gameOver" class="flex-none rounded-md h-max bg-green-700 px-3.5 py-2.5 my-4 text-sm text-white font-semibold shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700" @click="startOver()"> Play Again </button>
      </div>
    </div>
    <play-component v-if="showPlayComponent()" @updatePlay="updateScore"/>
    <div v-show="gameOver" class="flex justify-center my-6 rounded-md">
      <img src="../assets/game-victory-screen.avif" class="object-cover object-center group-hover:opacity-75 rounded-lg">
    </div>
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
        this.score = { success: 0, error: 0 }
      }
    },
    deletePlayer () {
      localStorage.removeItem('player')
      this.name = ''
      this.player = false
      this.gameOver = false
    },
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
<style scoped>
  .container-starter {
    position: absolute;
    width: 100%;
    height: 100%;
    align-items: center;
  }
  @media (max-width: 430px) {
    .container-head {
      display: flex;
      flex-direction: column;
    }
    .container-buttons {
      flex-direction: row !important;      
      justify-content: center;
      width: 100%;
    }
    .container-buttons button {
      margin: 0 0.5rem 0 0.5rem;
    }
  }
</style>>
  
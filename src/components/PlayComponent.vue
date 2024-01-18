<template>
  <div>
    <Cards :cards="shuffledCards" @updateScore="updateScore"/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Cards from './Cards.vue'
export default {
  name: 'play-component',
  components: { Cards },
  data() {
    return {
      shuffledCards: [],
      gameOver: false,
      counter: {
        success: 0,
        error: 0
      }
    }
  },
  computed: {
    ...mapGetters({
      cards: 'fetchDataCards'
    })
  },
  mounted() {
    this.getCards()
  },
  watch: {
    cards () {
      this.shuffledCards = this.shuffleCards(this.cards)
    }
  },
  methods: {
    getCards () {
      this.$store.dispatch('fetchDataCards')
    },
    shuffleCards (cards) {
      return cards.concat([...cards]).sort(() => this.randomFunction()).map((card, index) => ({ ...card, id: index }))
    },
    randomFunction() {
      return Math.random() - 0.5
    },
    // updateScore(data) {
    //   this.$emit('updatePlay', data)
    // }
    updateScore(counter) {
      this.counter[`${counter}`]++
      if (this.counter.success === this.shuffledCards.length/2) this.gameOver = true
      const data = {
        counters: this.counter,
        gameOver: this.gameOver
      }
      this.$emit('updatePlay', data)
    },
  }
  }
</script>
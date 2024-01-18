<template>
  <div>
    <div class="mx-auto max-w-3xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8"> 
      <div class="grid w-full grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 xl:gap-x-8 px-4 py-4 table-background rounded-lg">
        <Card v-for="(card, index) in cards" :key="index" :index="index" :animal="card" @emit="selectedCard"/>
      </div>
    </div>
  </div>
</template>
<script>
import Card from './Card.vue'
export default {
  name: 'cards',
  components: { Card },
  props: { cards: { type: [], default: [] }},
  data() {
    return {
      cardsSelected: []
    }
  },
  methods: {
    selectedCard (card) {
      if (!card.animal.isFlipped) { 
        this.cardsSelected.filter(card => card == card.index)
        return
      }
      if (this.cardsSelected.length < 2) {
        this.cardsSelected.push(card.index)
        if (this.cardsSelected.length === 2) this.checkMatchCards();
      }
    },
    checkMatchCards () {
      const indexCard1 = this.cardsSelected[0]
      const indexCard2 = this.cardsSelected[1]
      if (this.cards[indexCard1].uuid === this.cards[indexCard2].uuid) {
        [indexCard1, indexCard2].map(index => (this.cards[index].isMatched = true))
        // this.cards[indexCard1].isMatched = true
        // this.cards[indexCard2].isMatched = true
        this.$emit('updateScore', 'success')
      } else {
        [indexCard1, indexCard2].map(index => (this.cards[index].isFlipped = false))
        // this.cards[indexCard1].isFlipped = false
        // this.cards[indexCard2].isFlipped = false
        this.$emit('updateScore', 'error')

      }
      this.cardsSelected = []
    }
  },
}
</script>
<style scoped>
  .table-background {
    background-image: url('../assets/suelos-madera-marron.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>

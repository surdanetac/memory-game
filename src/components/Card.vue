<template>
  <div class="group rounded-lg px-1 py-1 bg-white cursor-pointer card" :class="setStyleCard()" @click="animal.isFlipped ? '' : flipCard()">
    <div class="flex-col">
      <div class="w-full h-32 overflow-hidden rounded-lg">
        <img :src="animal.url" :alt="animal.title" class="h-full w-full object-cover object-center group-hover:opacity-75" />
      </div>
      <h3 class="mt-4 text-sm text-gray-700">{{ animal.title }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: 'card',
  props: {
    animal: { type: Object, default: {} },
    index: { type: Number }
  },
  watch: {
   
  },
  methods: {
    flipCard () {
      this.animal.isFlipped = !this.animal.isFlipped
      this.$emit('emit', { index: this.index, animal: this.animal })
    },
    setStyleCard () {
      if (this.animal.isFlipped) {
         if (this.animal.isMatched === null) return 'active'
         else if (this.animal.isMatched) return 'active success'
         else if (!this.animal.isMatched) return 'active wrong'
      } else return ''
    }
  }
}
</script>
<style scoped>
  .no-flipped {
    background-color: aqua !important;
  }
  .card {
  border-radius: 5px;
  transform: rotateY(180deg);
  animation: 2s hideCard linear;
  transition: transform 0.5s;
}
@keyframes hideCard{
  0%, 70%{
    transform: rotateY(0);
  }
  100%{
    transform: rotateY(180deg);
  }
}
.card img, .card h3 {
  transition: transform 0.5s;
  transform: scale(0);
  animation: 2s hideImage linear;
}
@keyframes hideImage{
  0%, 70%{
    transform: scale(1);
  }
  100%{
    transform: scale(0);
  }
}

.card.active{
  transform: rotateY(0);
}
.card.success{
  background-color: #65e469;
}
.card.wrong{
  background-color: #fd245a;
}
.card.active img, .card.active h3 {
  transform: scale(1);
}
</style>
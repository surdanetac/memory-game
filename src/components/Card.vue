<template>
  <div class="group rounded-lg px-1 py-1 bg-white cursor-pointer" :class="{ 'no-flipped': !animal.isFlipped }" @click="animal.isMatched ? '' : flipCard()">
    <div class="w-full h-32 overflow-hidden rounded-lg">
      <img :src="animal.url" :alt="animal.title" class="h-full w-full object-cover object-center group-hover:opacity-75" />
    </div>
    <h3 class="mt-4 text-sm text-gray-700">{{ animal.title }}</h3>
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
    }
  }
}
</script>
<style scoped>
  .no-flipped {
    background-color: aqua !important;
  }
</style>
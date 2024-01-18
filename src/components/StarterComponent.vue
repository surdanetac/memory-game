<template>
  <div>
    <div class="mt-6 flex max-w-md gap-x-4">
      <input id="name" v-model='name' name="name" type="input" class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Player name" />
      <button type="submit" class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" @click=" name ? setSession() : ''">Let's play!!</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
   setSession() {
    this.$emit('setPlayer', this.name)
   }
  }
}
</script>
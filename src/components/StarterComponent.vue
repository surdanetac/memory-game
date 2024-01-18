<template>
<div class="flex justify-center container mx-auto h-1/4">
  <div class="flex flex-col max-w-md gap-x-4 w-full bg-white justify-center items-center rounded bg-image">
    <div class="flex flex-col items-start">
      <h3 class="text-md font-medium  text-slate-700"> Name player</h3>
      <input id="name" v-model='name' name="name" type="input" class="min-w-0 rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6" placeholder="Which is your name? " />
    </div>
    <button type="submit" class="mt-2 flex-none rounded-md bg-green-700 px-3.5 py-2.5 text-sm text-white font-semibold shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700" @click=" name ? setSession() : ''">Let's play!!</button>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  methods: {
   setSession() {
    this.$emit('setPlayer', this.name)
   }
  }
}
</script>
<style scope>
  
</style>
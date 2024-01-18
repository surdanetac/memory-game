<template>
  <div class="w-full flex justify-around">
    <div> 
      <h2> Player : </h2>
      <h4>{{ namePlayer }}</h4>
    </div>
    <div>
      <h2>Score</h2>
      <h4> Success movements :  {{ counterSuccess }} </h4>
      <h4> Errors movements : {{ counterError }} </h4>
    </div>
  </div>
</template>
<script>
export default {
  name: 'head-component',
  props: {
    name: { type: String },
    counters: { type: Object }
  },
  data() {
    return {
      namePlayer: '',
      counterError: 0,
      counterSuccess: 0
    }
  },
  watch: {
    name () {
      this.namePlayer = this.name
    },
    counters () {
      this.counterSuccess = this.counters.success
      this.counterError = this.counters.error
    }
  }
}
</script>
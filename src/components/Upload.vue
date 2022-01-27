<template>
  <h1>Upload field</h1>
  <button @click="increment">Increment</button>
  <br/>
  <label for="userName">Name</label>
  <input :value="message" @input="userInput" id="userName">
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Upload',
  computed: {
    ...mapState({
      message: state => state.message
    })
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    userInput(e) {
      this.$store.commit('userInput', e.target.value)
    }
  }
}
</script>

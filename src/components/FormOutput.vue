<template>
  <h1>Form output</h1>
  <p>Name: {{ this.$store.getters.getName }}</p>
  <p>Email: {{ this.$store.getters.getEmail }}</p>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "FormOutput",
  computed: {
    ...mapGetters([
      'getName',
      'getEmail',
    ])
  }
}
</script>

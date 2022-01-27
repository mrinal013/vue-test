<template>
    <input type="checkbox" class="form-check-input" id="exampleCheck1" value="checkbox" v-model="checkboxInput">
</template>

<script>
export default {
  name: "Checkbox",
  computed: {
    checkboxInput: {
      set(val) {
        this.$store.state.checkboxInput = val
      }
    }
  }
}
</script>

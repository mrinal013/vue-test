<template>
    <label class="form-check-label">Checkbox is {{ checkboxInput }}</label>
</template>

<script>
export default {
  name: "CheckboxOutput",
  computed: {
    checkboxInput: {
      get() {
        return this.$store.state.checkboxInput
      }
    }
  }
}
</script>

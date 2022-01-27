<template>
  <div class="import">
    <h1>This is import page</h1>
    <h1>Value {{ getIncrement }}</h1>
    <h4>User Input {{ getUserInput }}</h4>
  </div>
</template>

<script>
const Import = {
  name: 'Import',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/import',
      component: Import
    });
  },
  computed: {
    getIncrement() {
      return this.$store.state.count
    },
    getUserInput() {
      return this.$store.state.userInput
    }
  },
  created() {

  }
}
export default Import
</script>

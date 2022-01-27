<template>
  <div class="writting">
    <h1>This is writting settings page</h1>
  </div>
</template>

<script>
const Writting = {
  name: 'Writting',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/writting',
      component: Writting
    });
  },
  created() {

  }
}
export default Writting
</script>
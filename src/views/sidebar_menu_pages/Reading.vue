<template>
  <div class="reading">
    <h1>This is reading settings page</h1>
  </div>
</template>

<script>
const Reading = {
  name: 'Reading',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/reading',
      component: Reading
    });
  },
  created() {

  }
}
export default Reading
</script>
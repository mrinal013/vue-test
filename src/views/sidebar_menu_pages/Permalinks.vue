<template>
  <div class="permalinks">
    <h1>This is permalinks settings page</h1>
  </div>
</template>

<script>
const Permalinks = {
  name: 'Permalinks',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/permalinks',
      component: Permalinks
    });
  },
  created() {

  }
}
export default Permalinks
</script>
<template>
  <div class="export">
    <h1>This is export page</h1>
  </div>
</template>

<script>
const Export = {
  name: 'Export',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/export',
      component: Export
    });
  },
  created() {

  }
}
export default Export
</script>
<template>
  <div class="import">
    <h1>This is import page</h1>
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
  created() {

  }
}
export default Import
</script>
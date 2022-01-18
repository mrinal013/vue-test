<template>
  <div class="import">
    <h1>This is export personal data page</h1>
  </div>
</template>

<script>
const ExportPersonalData = {
  name: 'ExportPersonalData',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/export-personal-data',
      component: ExportPersonalData
    });
  },
  created() {

  }
}
export default ExportPersonalData
</script>
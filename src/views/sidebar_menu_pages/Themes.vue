<template>
  <div class="themes">
    <h1>This is Dashboard Themes page</h1>
  </div>
</template>

<script>
const DashboardThemes = {
  name: 'DashboardThemes',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/dashboard-themes',
      component: DashboardThemes
    });
  },
  created() {

  }
}
export default DashboardThemes
</script>
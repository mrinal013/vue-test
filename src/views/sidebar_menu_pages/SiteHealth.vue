<template>
  <div class="import">
    <h1>This is site health page</h1>
  </div>
</template>

<script>
const SiteHealth = {
  name: 'SiteHealth',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/site-health',
      component: SiteHealth
    });
  },
  created() {

  }
}
export default SiteHealth
</script>
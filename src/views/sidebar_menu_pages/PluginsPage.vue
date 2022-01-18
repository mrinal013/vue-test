<template>
  <div class="plugins">
    <h1>This is dashboard plugins page</h1>
  </div>
</template>
<script>
const PluginsPage = {
  name: 'PluginsPage',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/plugins-page',
      component: PluginsPage
    });
  },
  created() {

  }
}
export default PluginsPage
</script>
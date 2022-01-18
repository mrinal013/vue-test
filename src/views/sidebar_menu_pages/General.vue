<template>
  <div class="import">
    <h1>This is general settings page</h1>
  </div>
</template>

<script>
const General = {
  name: 'General',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/general',
      component: General
    });
  },
  created() {

  }
}
export default General
</script>
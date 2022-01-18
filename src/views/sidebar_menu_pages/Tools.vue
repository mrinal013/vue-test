<template>
  <div class="add">
    <h1>This is available tools page</h1>
  </div>
</template>

<script>
const Tools = {
  name: 'Tools',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/tools',
      component: Tools
    });
  },
  created() {

  }
}
export default Tools
</script>
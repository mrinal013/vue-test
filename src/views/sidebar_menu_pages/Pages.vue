<template>
  <div class="pages">
    <h1>This is Pages list</h1>
  </div>
</template>

<script>
const Pages = {
  name: 'Pages',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/pages',
      component: Pages
    });
  },
  created() {

  }
}
export default Pages
</script>
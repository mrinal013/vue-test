<template>
  <div class="add">
    <h1>This is widgets page</h1>
  </div>
</template>

<script>
const Widgets = {
  name: 'Widgets',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/widgets',
      component: Widgets
    });
  },
  created() {

  }
}
export default Widgets
</script>
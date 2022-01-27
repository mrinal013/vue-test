<template>
  <div class="add">
    <h1>This is menus page</h1>
  </div>
</template>

<script>
const Menus = {
  name: 'Menus',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/menus',
      component: Menus
    });
  },
  created() {

  }
}
export default Menus
</script>
<template>
  <div class="add">
    <h1>This is installed page</h1>
  </div>
</template>

<script>
const Installed = {
  name: 'Installed',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/installed',
      component: Installed
    });
  },
  created() {

  }
}
export default Installed
</script>
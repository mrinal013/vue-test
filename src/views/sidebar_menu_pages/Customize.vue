<template>
  <div class="themes">
    <h1>This is Customize page</h1>
  </div>
</template>

<script>
const Customize = {
  name: 'Customize',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/customize',
      component: Customize
    });
  },
  created() {

  }
}
export default Customize
</script>
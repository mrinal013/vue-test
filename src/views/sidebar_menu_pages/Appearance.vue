<template>
  <div class="appearance">
    <h1>This is Appearance page</h1>
  </div>
</template>

<script>
const Appearance = {
  name: 'Appearance',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/appearance',
      component: Appearance
    });
  },
  created() {

  }
}
export default Appearance
</script>
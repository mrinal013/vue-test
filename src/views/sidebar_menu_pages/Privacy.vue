<template>
  <div class="users">
    <h1>This is privacy page</h1>
    Let’s say you’re replacing the now-retired Vue Resource. You really enjoyed accessing request methods through this.$http and you want to do the same thing with Axios instead.
  </div>
</template>

<script>
 const Privacy = {
  name: 'Privacy',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/privacy',
      component: Privacy
    });
  },
  mounted() {
  }
}
export default Privacy
</script>
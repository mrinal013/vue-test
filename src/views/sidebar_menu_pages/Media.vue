<template>
  <div class="media">
    <h1>This is Media page</h1>
  </div>
</template>

<script>
const Media = {
  name: 'Media',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/media',
      component: Media
    });
  },
  created() {

  }
}
export default Media
</script>
<template>
  <div class="add">
    <h1>This is background page</h1>
  </div>
</template>

<script>
const Background = {
  name: 'Background',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/background',
      component: Background
    });
  },
  created() {

  }
}
export default Background
</script>
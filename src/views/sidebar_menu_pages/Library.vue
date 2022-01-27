<template>
  <div class="add">
    <h1>This is library page</h1>
  </div>
</template>

<script>
const Library = {
  name: 'Library',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/library',
      component: Library
    });
  },
  created() {

  }
}
export default Library
</script>
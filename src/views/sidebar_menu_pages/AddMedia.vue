<template>
  <div class="add">
    <h1>This is add media page</h1>
  </div>
</template>

<script>
const AddMedia = {
  name: 'AddMedia',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/add-media',
      component: AddMedia
    });
  },
  created() {

  }
}
export default AddMedia
</script>
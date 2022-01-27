<template>
  <div class="pages">
    <h1>This is Add page</h1>
  </div>
</template>

<script>
const AddPage = {
  name: 'AddPage',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/addpage',
      component: AddPage
    });
  },
  created() {

  }
}
export default AddPage
</script>
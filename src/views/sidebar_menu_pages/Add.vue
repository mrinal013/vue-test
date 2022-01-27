<template>
  <div class="add">
    <h1>This is add page</h1>
  </div>
</template>

<script>
const Add = {
  name: 'Add',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/add',
      component: Add
    });
  },
  created() {

  }
}
export default Add
</script>
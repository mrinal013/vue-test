<template>
  <div class="add">
    <h1>This is categories page</h1>
  </div>
</template>

<script>
const Categories = {
  name: 'Categories',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/categories',
      component: Categories
    });
  },
  created() {

  }
}
export default Categories
</script>
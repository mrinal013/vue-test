<template>
  <div class="add">
    <h1>This is tags page</h1>
  </div>
</template>

<script>
const Tags = {
  name: 'Tags',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/tags',
      component: Tags
    });
  },
  created() {

  }
}
export default Tags
</script>
<template>
  <div class="update">
    <h1>This is Update page</h1>
  </div>
</template>

<script>
const Update = {
  name: 'Update',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/update',
      component: Update
    });
  },
  created() {

  }
}
export default Update
</script>
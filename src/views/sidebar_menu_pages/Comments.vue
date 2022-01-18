<template>
  <div class="comments">
    <h1>This is Comments page</h1>
  </div>
</template>

<script>
const Comments = {
  name: 'Comments',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/comments',
      component: Comments
    });
  },
  created() {

  }
}
export default Comments
</script>
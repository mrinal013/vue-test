<template>
  <div class="posts">
    <h1>This is Posts list</h1>
  </div>
</template>

<script>
const Posts = {
  name: 'Posts',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/posts',
      component: Posts
    });
  },
  created() {

  }
}
export default Posts
</script>
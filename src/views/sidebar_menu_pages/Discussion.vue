<template>
  <div class="discussion">
    <h1>This is discussion settings page</h1>
  </div>
</template>

<script>
const Discussion = {
  name: 'Discussion',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/discussion',
      component: Discussion
    });
  },
  created() {

  }
}
export default Discussion
</script>
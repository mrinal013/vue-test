<template>
  <div class="users">
    <h1>This is users page</h1>
  </div>
</template>

<script>
const Users = {
  name: 'Users',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/users',
      component: Users
    });
  },
  created() {

  }
}
export default Users
</script>
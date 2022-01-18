<template>
  <div class="users">
    <h1>This is add user page</h1>
  </div>
</template>

<script>
const AddUser = {
  name: 'AddUser',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/add-user',
      component: AddUser
    });
  },
  created() {

  }
}
export default AddUser
</script>
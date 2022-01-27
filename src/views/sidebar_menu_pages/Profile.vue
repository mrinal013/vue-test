<template>
  <div class="users">
    <h1>This is profile page</h1>
  </div>
</template>

<script>
const Profile = {
  name: 'Profile',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/profile',
      component: Profile
    });
  },
  created() {

  }
}
export default Profile
</script>
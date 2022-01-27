<template>
  <div class="add">
    <h1>This is header page</h1>
  </div>
</template>

<script>
const Header = {
  name: 'Header',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/header',
      component: Header
    });
  },
  created() {

  }
}
export default Header
</script>
<template>
  <div class="add">
    <h1>This is theme editor page</h1>
  </div>
</template>

<script>
const ThemeEditor = {
  name: 'ThemeEditor',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/theme-editor',
      component: ThemeEditor
    });
  },
  created() {

  }
}
export default ThemeEditor
</script>
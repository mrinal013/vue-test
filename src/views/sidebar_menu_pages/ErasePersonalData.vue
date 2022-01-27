<template>
  <div class="import">
    <h1>This is erase personal data page</h1>
  </div>
</template>

<script>
const ErasePersonalData = {
  name: 'ErasePersonalData',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/erase-personal-data',
      component: ErasePersonalData
    });
  },
  created() {

  }
}
export default ErasePersonalData
</script>
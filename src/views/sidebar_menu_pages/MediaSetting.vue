<template>
  <div class="add">
    <h1>This is media setting page</h1>
  </div>
</template>

<script>
const MediaSetting = {
  name: 'MediaSetting',
  registerRoutes: (router) => {
    router.addRoute({
      path: '/media-setting',
      component: MediaSetting
    });
  },
  created() {

  }
}
export default MediaSetting
</script>
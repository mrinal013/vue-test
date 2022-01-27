<template>
  <div class="container-fluid p-0">
    <TopMenu/>
    <div class="container">
      <div class="row">
        <div class="col-3">
          <Sidebar/>
        </div>
        <div class="col-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopMenu from "./views/TopMenu";
import Sidebar from "./views/Sidebar";
export default {
  components: {
    TopMenu,
    Sidebar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  color: #2c3e50;
  text-decoration: none;
}
#nav a.router-link-active,
#nav a.router-link-exact-active {
  color: #42b983;
  font-weight: 700;
}
</style>

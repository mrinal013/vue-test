<template>
  <div class="container-fluid p-0">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" class="nav-link">WebAppick</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
          <ul class="navbar-nav justify-content-end mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/showcase" class="nav-link">Showcase</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/learn" class="nav-link">Learn</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/themes" class="nav-link">Themes</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/plugins" class="nav-link">Plugins</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/mobile" class="nav-link">Mobile</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/support" class="nav-link">Support</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/get-involved" class="nav-link">Get Involved</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/blog" class="nav-link">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/hosting" class="nav-link">Hosting</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  <div class="container">
    <div class="row">
      <div class="col-3">
        <ul class="list-group">
          <li class="list-group-item">
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="/posts">Posts</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="/media">Media</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="/pages">Pages</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="/comments">Comments</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="/appearance">Appearance</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="/plugins">Plugins</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="/users">Users</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="/tools">Tools</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="/settings">Settings</router-link>
          </li>
        </ul>
      </div>
      <div class="col-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
  </div>
</template>

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

<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-3 border">
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/home/general">General</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/home/add">Add</router-link>
            </li>
          </ul>
        </div>
        <div class="col-9 border">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>
.list-group-item a.router-link-active,
.list-group-item a.router-link-exact-active {
  color: #42b983;
  font-weight: 700;
}
</style>

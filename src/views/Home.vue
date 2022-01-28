<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col position-relative">
          <Form/>
        </div>
        <div class="col">
          <FormOutput/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Form from '../components/Form'
import FormOutput from "../components/FormOutput";

export default {
  name: 'Home',
  components: {
    Form,
    FormOutput
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

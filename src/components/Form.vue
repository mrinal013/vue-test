<template>
  <h1>Form Input</h1>
  <form class="text-start" v-bind:class="{'loading': isLoading}" @submit.prevent @submit="checkForm">

    <div v-if="errors.length">
    <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors" :key="error">{{error}}</li>
      </ul>
    </div>
    <div class="form-group">
      <label for="inputName">Name</label>
      <input type="text" class="form-control" id="inputName" placeholder="John Doe" :value="userName" @input="setInputName">
    </div>
    <div class="form-group mt-3">
      <label for="inputEmail">Email address</label>
      <input type="email" class="form-control" id="inputEmail" placeholder="Enter email" :value="email" @input="setEmail">
    </div>
    <div class="form-group mt-3">
      <label for="inputPassword1">Password</label>
      <input type="password" class="form-control" id="inputPassword1" placeholder="Password">
    </div>
    <div class="form-group mt-3">
      <label for="inputPassword2">Retype Password</label>
      <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
    </div>
    <div>not-match/match</div>
    <div class="form-group mt-3">
      <h4 class="border-bottom">Visibility</h4>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="visibility1" value="public" checked>
        <label class="form-check-label" for="visibility1">Public</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="visibility2" value="private">
        <label class="form-check-label" for="visibility2">Private</label>
      </div>
    </div>
    <div class="form-group mt-3">
      <h4>Development skills</h4>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="theme">
        <label class="form-check-label" for="theme">WordPress Theme</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="plugin">
        <label class="form-check-label" for="plugin">WordPress Plugin</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="vue">
        <label class="form-check-label" for="vue">Vue</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="react">
        <label class="form-check-label" for="react">React</label>
      </div>
    </div>
    <div class="form-group mt-3">
      <h4>Life aim</h4>
      <select class="form-control form-control-lg">
        <option value="engineer">Engineer</option>
        <option value="farmer">Farmer</option>
        <option value="doctor">Doctor</option>
        <option value="celebrity">Celebrity</option>
      </select>
    </div>
    <div class="form-group mt-3">
      <label for="age">Age</label>
      <input type="number" class="form-control" id="age" value="5">
    </div>
    <button class="btn btn-primary mt-3" @click="updateForm">Submit</button>
  </form>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      isLoading: false,
      userName: '',
      inputName: '',
      inputEmail: '',
      errors: []
    }
  },
  computed: {

  },
  methods: {
    setInputName(e) {
      this.inputName = this.userName = e.target.value
    },
    setEmail(e) {
      this.inputEmail = this.email = e.target.value
    },
    userFormUpdated() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(this.$store.dispatch('updateName', this.inputName))
          resolve(this.$store.dispatch('updateEmail', this.inputEmail))
        }, 2000)
      })
    },
    async updateForm() {
      this.isLoading = true
      await this.userFormUpdated()
      this.isLoading = false

    },
    checkForm: function(e) {
      this.errors = []
      if(!this.userName) {
        this.errors.push('Name required')
      }
      if(!this.email) {
        this.errors.push('Email required')
      }
      console.log(this.errors)
      e.preventDefault()
    }
  }
}
</script>

<script setup>


</script>

<style scoped>
.loading::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: red;
}
</style>

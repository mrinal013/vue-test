<template>
  <div class="import">
    <h1>This is general settings page</h1>
    <Upload/>
    <br/>
    <h4 v-if="getUserInput">User Input {{ getUserInput }}</h4>
    <br/>
    <div class="float-start">
      <Checkbox/>
      <CheckboxOutput/>
    </div>
    <Switch/>
  </div>
</template>

<script>
import Upload from "../../components/Upload";
import Checkbox from "../../components/Checkbox";
import CheckboxOutput from "../../components/CheckboxOutput";
import Switch from "../../components/Switch";

const General = {
  name: 'General',
  components: {
    Upload,
    Checkbox,
    CheckboxOutput,
    Switch
  },
  registerRoutes: (router) => {
    router.addRoute({
      path: '/general',
      component: General
    });
  },
  computed: {
    getUserInput() {
      return this.$store.state.userInput
    }
  },
  created() {

  }
}
export default General
</script>

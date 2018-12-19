<template>
  <div id="app">
    <FormPage/>
  </div>
</template>

<script>
import FormPage from './components/FormPage.vue'

export default {
  name: 'app',
  components: {
    FormPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  width: 700px;
  border: 1px solid #CCCCCC;
  background-color: #FFFFFF;
  margin: auto;
  margin-top: 60px;
  padding: 20px;
}
</style>

<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header'

export default {
  name: 'app',
  components:{
    'Header':Header
  }

}
</script>

<style>
#app {
 
}
</style>

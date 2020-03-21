<template>
  <div id="app">
    <app-nav></app-nav>
    <div class="container">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components:{
    'app-nav': Navbar
  }
}
</script>

<style>

</style>

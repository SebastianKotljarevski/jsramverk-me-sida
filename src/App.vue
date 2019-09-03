<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
body, ul {
   padding:0; margin:0;
   font-family: 'Lato', sans-serif;
}

#text {
    width: 50%;
    margin: 0 auto;
}
</style>

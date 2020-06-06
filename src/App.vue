<template>
  <div id="app">
    <transition>
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  /* margin-top: 60px; */
}
html, body {
  height: 100%;
  margin: 0;
}
.v-enter {
  transform: translateX(100%);
}
.v-leave-to {
  transform: translateX(-100%);
  position: absolute; /* 解决上自下往上颤动问题 */
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>

<template>
  <div class="app">
    <main-layout>
      <router-view />
    </main-layout>
  </div>
</template>
<script>
import MainLayout from "./components/layout/MainLayout";

export default {
  components: {
    MainLayout,
  },
};
</script>
<style lang="scss">
.app {
  text-align: center;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
// .app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// .nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>

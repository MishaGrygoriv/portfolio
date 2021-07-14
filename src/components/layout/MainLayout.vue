<template>
  <div class="main-layout">
    <the-header />
    <slot />
  </div>
</template>
<script>
import TheHeader from "../sections/TheHeader.vue";

export default {
  name: "MainLayout",
  components: { TheHeader },
};
</script>
<style lang="scss">
</style>
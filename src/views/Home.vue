<template>
  <div class="home">
    <first-section />
    <second-section />
  </div>
</template>
<script>
import FirstSection from "../components/sections/home-sections/FirstSection.vue";
import SecondSection from "../components/sections/home-sections/SecondSection.vue";

export default {
  name: "Home",
  components: {
    FirstSection,
    SecondSection,
  },
};
</script>
<style lang="scss">
</style>

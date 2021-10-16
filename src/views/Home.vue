<template>
  <div class="home">
    <first-section />
    <second-section />
    <the-footer />
  </div>
</template>
<script>
import FirstSection from "../components/sections/home-sections/FirstSection.vue";
import SecondSection from "../components/sections/home-sections/SecondSection.vue";
import TheFooter from "../components/sections/TheFooter.vue";

export default {
  name: "Home",
  components: {
    FirstSection,
    SecondSection,
    TheFooter,
  },
};
</script>
<style lang="scss">
</style>

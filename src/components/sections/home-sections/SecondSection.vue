<template>
  <div class="second-section">
    <main-slider />
  </div>
</template>
<script>
import MainSlider from "../../common/MainSlider.vue";

export default {
  name: "SecondSection",
  components: { MainSlider },
};
</script>
<style lang="scss">
.second-section {
  margin-bottom: 100px;
}
</style>
<template>
  <div class="second-section container dark">
    <h2 class="second-section__title">Recent work</h2>
    <main-slider class="second-section__slider" />
    <the-button :btn="text" />
  </div>
</template>
<script>
import MainSlider from "../../common/MainSlider.vue";
import TheButton from "../../common/TheButton.vue";

export default {
  name: "SecondSection",
  data: () => ({
    text: "Check out more",
  }),
  components: { MainSlider, TheButton },
};
</script>
<style lang="scss">
.second-section {
  &__title {
    @include text(70px, 700, #040404);
    // @include text(100px, 800, #040404);
    letter-spacing: 5px;
    text-align: left;
    margin-bottom: 50px;
    padding: 50px 0 80px;
  }
  &__slider {
    margin-bottom: 100px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      min-width: 1300px;
      min-height: 500px;
      width: 100px;
      height: 100px;
      background-color: #040404;
      right: 120px;
      bottom: -25px;
    }
  }
}
</style>
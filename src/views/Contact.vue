<template>
  <div class="contact">
    <div class="contact__title-container">
      <title-background
        class="contact__title-background"
        first_back_title="Get in"
        second_back_title="Touch"
      />
      <div class="contact__title-wrapper">
        <h1 class="contact__title">
          I would <span class="contact__title _bold">like</span> to hear
          <span class="contact__title _bold">suggestions</span>
          <span class="contact__title _new-line"
            >from <span class="contact__title _bold">you</span>. Please, get in
            <span class="contact__title _bold">touch</span> with
            <span class="contact__title _bold">me</span>!</span
          >
        </h1>
      </div>
    </div>
    <!-- <test></test> -->
  </div>
</template>
<script>
// import Test from "../components/common/Test.vue";
import TitleBackground from "../components/common/TitleBackground.vue";

export default {
  name: "Contact",
  components: {
    TitleBackground,
    // Test,
  },
};
</script>
<style lang="scss">
.contact {
  &__title-container {
    position: relative;
  }
  &__title-wrapper {
    position: absolute;
    top: 95px;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &__title {
    @include text(3.25rem, 300, $light-color);
    &._new-line {
      display: block;
    }
    &._bold {
      display: inline;
      font-weight: 700;
    }
  }
}
</style>
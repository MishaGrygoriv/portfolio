<template>
  <div class="about">
    <div class="about__title-container">
      <title-background first_back_title="About" second_back_title="Me" />
      <div class="about__title-wrapper">
        <h1 class="about__title">
          I'm a passionate
          <span class="about__title _bold">developer</span> who loves
          <span class="about__title _new-line">
            <span>
              <span class="about__title _bold">coding</span>
              <span class="about__title _ampersand"> &amp;</span> researching
              <span class="about__title _bold">new</span> ways
            </span>
          </span>
        </h1>
      </div>
    </div>
    <div class="about__progress-wrapper">
      <html-progress-bar />
      <css-progress-bar />
      <js-progress-bar />
    </div>
  </div>
</template>
<script>
import TitleBackground from "../components/common/TitleBackground.vue";
import HtmlProgressBar from "../components/common/progress-bar/HtmlProgressBar.vue";
import CssProgressBar from "../components/common/progress-bar/CssProgressBar.vue";
import JsProgressBar from "../components/common/progress-bar/JsProgressBar.vue";

export default {
  name: "About",
  components: {
    TitleBackground,
    HtmlProgressBar,
    CssProgressBar,
    JsProgressBar,
  },
};
</script>
<style lang="scss">
.about {
  &__title-container {
    position: relative;
    margin-bottom: 250px;
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
    &._ampersand {
      display: inline;
      color: $blue-text-color;
      font-size: 300;
    }
  }
  &__progress-wrapper {
    @include flex(space-around, stretch);
    margin-bottom: 100px;
  }
}
</style>

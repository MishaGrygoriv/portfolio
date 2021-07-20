<template>
  <div class="projects">
    <div class="projects__title-container">
      <title-background
        first_back_title="Recent"
        second_back_title="Projects"
      />
      <div class="projects__title-wrapper">
        <h1 class="projects__title">
          Let's take a <span class="projects__title _bold">look</span> at my
          <span class="projects__title _bold">projects</span>
          <span class="projects__title _new-line">
            scroll down
            <span class="projects__title _ampersand">&amp;</span>
            <span>
              just
              <span class="projects__title _bold">enjoy</span> it
            </span>
          </span>
        </h1>
      </div>
    </div>
    <div class="light projects__section">
      <h2 class="projects__section-title">My Projects</h2>
      <h2>next</h2>
    </div>
  </div>
</template>
<script>
import TitleBackground from "../components/common/TitleBackground.vue";

export default {
  name: "Projects",
  components: {
    TitleBackground,
  },
};
</script>
<style lang="scss">
.projects {
  &__title-container {
    position: relative;
    margin-bottom: 300px;
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
  // &__section {
  //   background-color: $light-color;
  //   background-repeat: no-repeat;
  //   background-position: 100% 100%;
  // }
  &__section-title {
    @include text($H720, 700, $text-section-color);
    text-align: left;
    margin-bottom: 100px;
  }
}
</style>
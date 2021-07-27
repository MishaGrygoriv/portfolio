<template>
  <div class="interests">
    <div class="interests__title-container">
      <title-background
        class="interests__back-title-wrapper"
        first_back_title="Hobbies"
        second_back_title="Interests"
      />
      <div class="interests__title-wrapper">
        <h1 class="interests__title">
          Besides <span class="interests__title _bold">coding</span>,
          <span class="interests__title _bold">video</span> shooting
          <span class="interests__title _ampersand">&amp; </span
          ><span>editing</span>
          <span class="interests__title _new-line"
            >are <span class="interests__title _bold">my</span> favourite
            passions. Here are some
            <span class="interests__title _bold">my videos</span>
          </span>
        </h1>
      </div>
    </div>
    <video-play class="interests__video-play" />
    <div class="interests__section dark">
      <h2 class="interests__section-title">My Videos</h2>
      <ul class="interests__video-card-list">
        <li class="interests__video-card-item">
          <video-card />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import TitleBackground from "../components/common/TitleBackground.vue";
import VideoCard from "../components/common/video/VideoCard.vue";
import VideoPlay from "../components/common/video/VideoPlay.vue";

export default {
  name: "Interests",
  components: {
    TitleBackground,
    VideoCard,
    VideoPlay,
  },
};
</script>
<style lang="scss">
.interests {
  &__title-container {
    position: relative;
  }
  &__back-title-wrapper {
    &::before {
      content: "&";
      position: absolute;
      @include text($H720, 400, $bg-text-color);
      @include position(123px);
    }
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
  &__video-play {
    margin-bottom: 150px;
  }
  &__section {
    padding: 30px 60px;
  }
  &__section-title {
    @include text($H720, 700, $text-section-color);
    text-align: left;
    margin-bottom: 100px;
    padding-left: 100px;
  }
}
</style>
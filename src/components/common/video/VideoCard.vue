<template>
  <div class="video-card">
    <video-button class="video-card__play" />
    <div class="video-card__wrapper">
      <div class="video-card__footer">
        <ul class="video-card__social-list">
          <li
            class="video-card__social-item first-section__social-item"
            v-for="icon in socialIcons"
            :key="icon.name"
          >
            <a
              class="video-card__social-link"
              :href="icon.href"
              target="_blank"
              :class="icon.classLink"
            >
              <i class="video-card__social-icon" :class="icon.classIcon"></i>
            </a>
          </li>
        </ul>
        <animation-background class="video-card__animation-bg" />
        <div class="video-card__description">
          <h2 class="video-card__title">Just Go</h2>
          <h2 class="video-card__subtitle">(by Michael’s_Way)</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VideoButton from "./VideoButton.vue";
import AnimationBackground from "../../icons/AnimationBackground.vue";

export default {
  components: { VideoButton, AnimationBackground },
  name: "VideoCard",
  data() {
    return {
      socialIcons: this.$store.state.videoSocialIcons,
      videoLinks: this.$store.state.videoLinks,
    };
  },
};
</script>
<style lang="scss">
.video-card {
  position: relative;
  &:before {
    content: "";
    background-color: #1b1d1f;
    width: 700px;
    height: 400px;
    position: absolute;
    top: 25px;
    right: 0;
    left: -50px;
    bottom: 0;
    opacity: 0.5;
  }
  &__wrapper {
    position: relative;
    border-radius: 8px;
    min-height: 450px;
    max-width: 600px;
    height: 100%;
    width: 100%;
    box-shadow: 0 0 20px -4px $main-bg-color;
    transition: all 0.2s ease-in-out;
    // top: 0;
    // right: 0;
    // left: 0;
    // bottom: 0;
    // background-image: url("../../assets/hfch.jpeg");
    // background-size: cover;
    // background-position: center;
    // background-repeat: no-repeat;
    overflow: hidden;
    &:hover {
      box-shadow: 0 0 40px -2px $main-bg-color;
    }
    &:after {
      content: "";
      background-image: url("../../../assets/Just_Go.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      transform: scale(1);
      transition: transform 0.4s ease-out;
    }
    &:hover:after {
      // filter: blur(1px);
      transform: scale(1.1);
    }
    &:hover .video-card__social-item {
      transform: translateY(0px);
    }
    &:hover .video-card__description {
      transform: translateY(0px);
    }
    &:hover .video-card__animation-bg {
      position: absolute;
      fill: $text-section-color;
      left: 0;
      bottom: 0;
      width: 600px;
      height: 450px;
    }
  }
  // &__container {
  //   position: relative;
  // }
  &__play {
    z-index: 2;
    &:hover + .video-card__wrapper:after {
      filter: blur(2px);
      transform: scale(1.2);
    }
    &:hover + .video-card__wrapper {
      box-shadow: 0 0 40px -2px $main-bg-color;
    }
  }
  &__footer {
    z-index: 1;
    position: absolute;
    height: 80px;
    width: 100%;
    bottom: 0;
  }
  &__social-list {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 110px;
    z-index: 1;
  }
  &__social-item {
    display: inline-block;
    margin-right: 25px;
    transform: translateY(200px);
    transition: transform 1s cubic-bezier(0.46, 1.48, 0.18, 0.81);
    &:nth-child(2) {
      transition-delay: 0.06s;
    }
    &:last-child {
      margin-right: 0;
      transition-delay: 0.12s;
    }
  }
  &__description {
    font-family: Inconsolata;
    transform: translateY(250px);
    transition: transform 1s cubic-bezier(0.31, 1.21, 0.64, 1.02);
  }
  &__title {
    font-weight: bolder;
    margin-bottom: 10px;
  }
}
</style>
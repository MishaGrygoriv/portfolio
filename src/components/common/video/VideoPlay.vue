<template>
  <div class="video-play">
    <input class="video-play__checkbox" type="checkbox" />
    <div class="video-play__wrapper">
      <video
        class="video-play__video"
        :src="video"
        controls
        loop
        muted
        autoplay
      ></video>
    </div>
    <div class="video-play__text-wrapper">
      <span class="video-play__text" data-text="Watch the video"></span>
    </div>
  </div>
</template>

<script>
import video from "@/assets/Egypt_Continental Plaza_2020 (convert-video-online.com).webm";

export default {
  name: "VideoPlay",
  data() {
    return {
      video: video,
    };
  },
};
</script>

<style lang="scss">
.video-play {
  position: relative;
  @include flex(center, center);
  width: 100%;
  &__checkbox {
    width: 283px;
    height: 113px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    border-radius: 40px;
    z-index: 4;
    appearance: none;
    cursor: pointer;
    &:focus {
      outline: 0;
    }
    &:hover {
      ~ .video-play__wrapper {
        clip-path: circle(120px at left);
      }
      ~ .video-play__text-wrapper {
        &::before {
          right: 25px;
          opacity: 1;
        }
        &::after {
          clip-path: circle(70px at left);
        }
        > .video-play__text {
          &::after {
            clip-path: circle(70px at left);
          }
        }
      }
    }
    &:checked {
      width: 100%;
      height: 180%;
      border-radius: 0;
      ~ .video-play__wrapper {
        clip-path: circle(100vw at left);
      }
      ~ .video-play__text-wrapper {
        opacity: 0;
        transition: opacity 0.3s ease;
        &::after {
          clip-path: circle(100vw at left);
        }
        > .video-play__text {
          &::after {
            clip-path: circle(100vw at left);
          }
        }
      }
    }
  }
  &__wrapper {
    height: 50vh;
    overflow: hidden;
    @include flex(center, center);
    margin-left: 15px;
    clip-path: circle(60px at left);
    transition: clip-path 0.4s ease;
    z-index: 3;
  }
  &__video {
    position: absolute;
    background: #c4cbde;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
  &__text-wrapper {
    position: relative;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.2px;
    opacity: 1;
    transition: opacity 0.3s ease 0.2s;
    left: 51px;
    z-index: 3;
    &::before,
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: -1px;
      right: 25px;
      height: 0;
    }
    &::before {
      box-shadow: 26px 0 0 1px #3c3c3c;
      right: 100%;
      opacity: 0;
      transition: right 0.5s ease-in, opacity 0.1s linear;
    }
    &::after {
      box-shadow: 26px 0 0 1px $light-color;
      clip-path: circle(15px at left);
      transition: clip-path 0.4s ease;
    }
  }
  &__text {
    &::before,
    &::after {
      content: attr(data-text);
      padding-left: 26px;
    }
    &::before {
      color: #3c3c3c;
    }
    &::after {
      color: $light-color;
      clip-path: circle(15px at left);
      transition: clip-path 0.4s ease;
      position: absolute;
      left: 0;
    }
  }
}
</style>
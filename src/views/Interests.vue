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
            >are <span class="interests__title _bold">one</span> of my passions.
            Here are some
            <span class="interests__title _bold">my videos</span>
          </span>
        </h1>
      </div>
    </div>
    <div class="interests__video-container">
      <input class="interests__checkbox" type="checkbox" />
      <div class="interests__video-wrapper">
        <video
          class="interests__video"
          :src="video"
          controls
          loop
          muted
          autoplay
        ></video>
      </div>
      <div class="interests__text-wrapper">
        <span class="interests__video-text" data-text="Watch the video"></span>
      </div>
    </div>
    <div class="test">
      <h2>NEXT</h2>
    </div>
  </div>
</template>
<script>
import video from "@/assets/Egypt_Continental Plaza_2020 (convert-video-online.com).webm";
import TitleBackground from "../components/common/TitleBackground.vue";

export default {
  name: "Interests",
  components: {
    TitleBackground,
  },
  data() {
    return {
      video: video,
    };
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
  &__video-container {
    position: relative;
    @include flex(center, center);
    width: 100%;
    margin-bottom: 250px;
  }
  &__checkbox {
    width: 283px;
    height: 113px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    border-radius: 40px;
    z-index: 2;
    appearance: none;
    cursor: pointer;
    &:focus {
      outline: 0;
    }
    &:hover {
      ~ .interests__video-wrapper {
        clip-path: circle(120px at left);
      }
      ~ .interests__text-wrapper {
        &::before {
          right: 25px;
          opacity: 1;
        }
        &::after {
          clip-path: circle(70px at left);
        }
        > .interests__video-text {
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
      ~ .interests__video-wrapper {
        clip-path: circle(100vw at left);
      }
      ~ .interests__text-wrapper {
        opacity: 0;
        transition: opacity 0.3s ease;
        &::after {
          clip-path: circle(100vw at left);
        }
        > .interests__video-text {
          &::after {
            clip-path: circle(100vw at left);
          }
        }
      }
    }
  }
  &__video-wrapper {
    height: 50vh;
    overflow: hidden;
    @include flex(center, center);
    margin-left: 15px;
    clip-path: circle(60px at left);
    transition: clip-path 0.4s ease;
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
  &__video-text {
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
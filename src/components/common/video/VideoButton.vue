<template >
  <div class="video-btn">
    <div class="video-btn__backdrop"></div>
    <div class="video-btn__play-button">
      <video-circles-svg class="video-btn__circles" />
      <div class="video-btn__perspective">
        <button class="video-btn__close-button"></button>
        <div class="video-btn__triangle">
          <div class="video-btn__video-wrapper">
            <iframe
              width="600"
              height="400"
              src="https://www.youtube.com/embed/WhZIWZcfeGA"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import gsap from "gsap";
import { ExpoScaleEase } from "gsap/EasePack";
import VideoCirclesSvg from "../../icons/VideoCirclesSvg.vue";

export default {
  name: "VideoButton",
  components: { VideoCirclesSvg },
  data() {
    return {
      videoLinks: this.$store.state.videoLinks,
    };
  },
  mounted() {
    gsap.set(".first-circle", {
      rotation: 90,
      transformOrigin: "center",
    });

    gsap.set(".second-circle", {
      rotation: -90,
      transformOrigin: "center",
    });

    gsap.set(".video-btn__perspective", {
      xPercent: 6.5,
      scale: 0.175,
      transformOrigin: "center",
      perspective: 1,
    });

    gsap.set(".video-btn__video-wrapper", {
      visibility: "hidden",
      opacity: 0,
    });

    gsap.set(".video-btn__triangle", {
      transformOrigin: "left center",
      transformStyle: "preserve-3d",
      rotationY: 10,
      scaleX: 2,
    });
    const rotateTL = gsap
      .timeline({ paused: true })
      .to(
        ".first-circle",
        {
          opacity: 0.1,
          rotation: "+=360",
          strokeDasharray: "456 456",
          ease: "power1.inOut",
        },
        0
      )
      .to(
        ".second-circle",
        {
          opacity: 0.1,
          rotation: "-=360",
          strokeDasharray: "411 411",
          ease: "power1.inOut",
        },
        0
      );

    const openTL = gsap
      .timeline({ paused: true })
      .to(
        ".video-btn__backdrop",
        {
          opacity: 0.95,
          visibility: "visible",
          ease: "power2.inOut",
        },
        0
      )
      .to(
        ".video-btn__close-button",
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        ".video-btn__perspective",
        {
          xPercent: 0,
          scale: 1,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        ".video-btn__triangle",
        {
          scaleX: 1,
          ease: ExpoScaleEase.config(2, 1, "power2.inOut"),
        },
        0
      )
      .to(
        ".video-btn__triangle",
        {
          rotationY: 0,
          ease: ExpoScaleEase.config(10, 0.01, "power2.inOut"),
        },
        0
      )
      .to(
        ".video-btn__video-wrapper",
        {
          visibility: "visible",
          opacity: 1,
        },
        0.5
      );

    const button = document.querySelector(".video-btn__play-button");
    const backdrop = document.querySelector(".video-btn__backdrop");
    const close = document.querySelector(".video-btn__close-button");

    button.addEventListener("mouseover", () => rotateTL.play());
    button.addEventListener("mouseleave", () => rotateTL.reverse());
    button.addEventListener("click", () => openTL.play());
    backdrop.addEventListener("click", () => openTL.reverse());
    close.addEventListener("click", (e) => {
      e.stopPropagation();
      openTL.reverse();
    });
  },
};
</script>
<style lang="scss">
.video-btn {
  position: absolute;
  left: 224px;
  bottom: 185px;
  &__backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #000;
    opacity: 0;
    visibility: hidden;
  }
  &__play-button {
    width: 152px;
    height: 152px;
    position: relative;
    cursor: pointer;
  }
  &__circles {
    display: block;
    width: 100%;
    height: 100%;
  }
  &__perspective {
    width: 600px;
    height: 400px;
    position: absolute;
    left: -230px;
    top: -125px;
  }
  &__close-button {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0;
    bottom: calc(100% + 15px);
    border: none;
    outline: none;
    background: none;
    opacity: 0;
    cursor: pointer;
  }
  &__close-button::before,
  &__close-button::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: rotate(45deg);
    background-color: #fff;
  }
  &__close-button::after {
    transform: rotate(-45deg);
  }
  &__triangle {
    width: 600px;
    height: 400px;
    background-color: #fff;
    cursor: pointer;
  }
}
</style>
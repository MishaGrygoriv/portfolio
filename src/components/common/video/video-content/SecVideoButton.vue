<template>
  <div class="video-gallery">
    <div v-for="video in test" :key="video.name">
      <div :class="video.class1"></div>
      <div :class="video.class2">
        <svg :class="video.class3" viewBox="0 0 152 152">
          <circle
            :class="video.class4"
            fill="none"
            stroke="#fff"
            stroke-width="3"
            stroke-dasharray="343 343"
            cx="76"
            cy="76"
            r="72.7"
          />
          <circle
            :class="video.class5"
            fill="none"
            stroke="#fff"
            stroke-width="3"
            stroke-dasharray="309 309"
            cx="76"
            cy="76"
            r="65.5"
          />
        </svg>
        <div :class="video.class6">
          <button :class="video.class7"></button>
          <div :class="video.class8">
            <div :class="video.class9">
              <iframe
                width="600"
                height="400"
                :src="video.src"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import gsap from "gsap";
import { ExpoScaleEase } from "gsap/EasePack";

export default {
  name: "VideoButton",
  data() {
    return {
      test: this.$store.state.test,
    };
  },
  mounted() {
    gsap.set(".play-circle-01, .class4", {
      rotation: 90,
      transformOrigin: "center",
    });

    gsap.set(".play-circle-02, .class5", {
      rotation: -90,
      transformOrigin: "center",
    });

    gsap.set(".play-perspective, .class6", {
      xPercent: 6.5,
      scale: 0.175,
      transformOrigin: "center",
      perspective: 1,
    });

    gsap.set(".play-video, .class9", {
      visibility: "hidden",
      opacity: 0,
    });

    gsap.set(".play-triangle, .class8", {
      transformOrigin: "left center",
      transformStyle: "preserve-3d",
      rotationY: 10,
      scaleX: 2,
    });

    const rotateTL = gsap
      .timeline({ paused: true })
      .to(
        ".play-circle-01",
        {
          opacity: 0.1,
          rotation: "+=360",
          strokeDasharray: "456 456",
          ease: "power1.inOut",
        },
        0
      )
      .to(
        ".play-circle-02",
        {
          opacity: 0.1,
          rotation: "-=360",
          strokeDasharray: "411 411",
          ease: "power1.inOut",
        },
        0
      );

    const rotate1 = gsap
      .timeline({ paused: true })
      .to(
        ".class4",
        {
          opacity: 0.1,
          rotation: "+=360",
          strokeDasharray: "456 456",
          ease: "power1.inOut",
        },
        0
      )
      .to(
        ".class5",
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
        ".play-backdrop",
        {
          opacity: 0.95,
          visibility: "visible",
          ease: "power2.inOut",
        },
        0
      )
      .to(
        ".play-close",
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        ".play-perspective",
        {
          xPercent: 0,
          scale: 1,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        ".play-triangle",
        {
          scaleX: 1,
          ease: ExpoScaleEase.config(2, 1, "power2.inOut"),
        },
        0
      )
      .to(
        ".play-triangle",
        {
          rotationY: 0,
          ease: ExpoScaleEase.config(10, 0.01, "power2.inOut"),
        },
        0
      )
      .to(
        ".play-video",
        {
          visibility: "visible",
          opacity: 1,
        },
        0.5
      );

    const open1 = gsap
      .timeline({ paused: true })
      .to(
        ".class1",
        {
          opacity: 0.95,
          visibility: "visible",
          ease: "power2.inOut",
        },
        0
      )
      .to(
        ".class7",
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        ".class6",
        {
          xPercent: 0,
          scale: 1,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        ".class8",
        {
          scaleX: 1,
          ease: ExpoScaleEase.config(2, 1, "power2.inOut"),
        },
        0
      )
      .to(
        ".class8",
        {
          rotationY: 0,
          ease: ExpoScaleEase.config(10, 0.01, "power2.inOut"),
        },
        0
      )
      .to(
        ".class9",
        {
          visibility: "visible",
          opacity: 1,
        },
        0.5
      );

    const button = document.querySelector(".play-button");
    const backdrop = document.querySelector(".play-backdrop");
    const close = document.querySelector(".play-close");

    button.addEventListener("mouseover", () => rotateTL.play());
    button.addEventListener("mouseleave", () => rotateTL.reverse());
    button.addEventListener("click", () => openTL.play());
    backdrop.addEventListener("click", () => openTL.reverse());
    close.addEventListener("click", (e) => {
      e.stopPropagation();
      openTL.reverse();
    });

    const button1 = document.querySelector(".class2");
    const backdrop1 = document.querySelector(".class1");
    const close1 = document.querySelector(".class7");

    button1.addEventListener("mouseover", () => rotate1.play());
    button1.addEventListener("mouseleave", () => rotate1.reverse());
    button1.addEventListener("click", () => open1.play());
    backdrop1.addEventListener("click", () => open1.reverse());
    close1.addEventListener("click", (e) => {
      e.stopPropagation();
      open1.reverse();
    });
  },
};
</script>
<style lang="scss">
.video-gallery {
  position: absolute;
  left: 224px;
  bottom: 185px;
}
.play-button,
.class2 {
  width: 152px;
  height: 152px;
  position: relative;
  cursor: pointer;
}

.play-backdrop,
.class1 {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #000;
  opacity: 0;
  visibility: hidden;
}

.play-close,
.class7 {
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

.play-close::before,
.play-close::after,
.class7::before,
.class7::after {
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

.play-close::after,
.class7::after {
  transform: rotate(-45deg);
}

.play-circles,
.class3 {
  display: block;
  width: 100%;
  height: 100%;
}

.play-perspective,
.class6 {
  width: 600px;
  height: 400px;
  position: absolute;
  left: -230px;
  top: -125px;
}

.play-triangle,
.class8 {
  width: 600px;
  height: 400px;
  background-color: #fff;
  cursor: pointer;
}
</style>
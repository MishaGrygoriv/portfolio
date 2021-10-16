<template>
  <div class="scroll-down">
    <h2 class="scroll-down__subtitle">Scroll Down</h2>
    <div class="scroll-down__circle-wrapper">
      <div class="scroll-down__circle _top"></div>
      <div class="scroll-down__circle"></div>
      <div class="scroll-down__circle _bottom"></div>
      <scroll-down-arrow class="scroll-down__icon-arrow" />
    </div>
  </div>
</template>
<script>
import ScrollDownArrow from "../icons/ScrollDownArrow";

export default {
  name: "ScrollDownBtn",
  components: { ScrollDownArrow },
};
</script>
<style lang="scss">
.scroll-down {
  @include flex(center, center);
  position: relative;
  top: -60px;
  &__subtitle {
    position: absolute;
    top: -15px;
    // &::after {
    //   content: "Down";
    //   position: absolute;
    //   top: 72px;
    //   left: 0;
    // }
  }
  &__circle-wrapper {
    width: 60px;
    height: 60px;
    filter: url("#goo");
    cursor: pointer;
    transition: animation 0.4s ease-in-out;
    &:hover .st-arrow {
      animation: scrolly 3s cubic-bezier(0.77, 0, 0.175, 1) forwards infinite;
    }
    &:hover ._top {
      animation: blob-1-anim 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
      top: 0;
    }
    &:hover ._bottom {
      animation: blob-2-anim 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
      bottom: 0;
    }
  }
  &__circle {
    background: $light-color;
    border-radius: 50%;
    display: inline-block;
    height: 60px;
    width: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    transform-origin: 0%;
    &._top {
      height: $H500 / 2.5;
      width: $H500 / 2.4;
      animation: none;
      z-index: 0;
      // top: 0;
    }
    &._bottom {
      height: $H500 / 3;
      width: $H500 / 2.4;
      animation: none;
      z-index: 9;
      // bottom: 0;
    }
  }
  &__icon-arrow {
    z-index: 9;
    position: relative;
  }
}
.st-arrow {
  fill: #55544f;
  animation: none;
  perspective: 9000px;
  transform: translateZ(0);
  transform-origin: bottom;
}
@keyframes blob-1-anim {
  0% {
    transform: translateX(-50%) translateY(0);
  }
  14% {
    transform: translateX(-50%) translateY(-6px);
  }
  24% {
    transform: translateX(-50%) translateY(0);
  }
  100% {
    transform: translateX(-50%) translateY(0);
  }
}

@keyframes blob-2-anim {
  0% {
    transform: scale(1) translate(-50%, 10px);
  }
  30% {
    transform: scale(1) translate(-50%, 10px);
  }
  70% {
    transform: scale(1) translate(-50%, 10px);
  }
  95% {
    transform: scale(1) translate(-50%, 26px);
  }
  100% {
    transform: scale(1) translate(-50%, 10px);
  }
}
@keyframes scrolly {
  0% {
    transform: translate3d(0, -150%, 0) rotateX(90deg) scale(0.5) skewX(3deg);
  }
  30% {
    transform: translate3d(0, 0, 0) rotateX(0deg) scale(1) skewX(0deg);
  }
  70% {
    transform: translate3d(0, 0, 0) rotateX(0deg) scale(1) skewX(0deg);
  }
  95% {
    transform: translate3d(0, 50%, 0) rotateX(-90deg) scale(0.5) skewX(-3deg);
  }
  100% {
    transform: translate3d(0, 50%, 0) rotateX(-90deg) scale(0.5) skewX(-3deg);
  }
}
</style>

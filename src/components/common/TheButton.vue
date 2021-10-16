<template>
  <div class="btn">
    <a href="#" class="btn__link">{{ btn }}</a>
  </div>
</template>
<script>
export default {
  name: "TheButton",
  props: {
    btn: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.btn {
  &__link {
    @include text($H40, 400, $text-color);
    background-color: #040404;
    letter-spacing: 1px;
    padding: 12px 20px;
    position: relative;
    transition: background-color 225ms cubic-bezier(0.7, 0.15, 0.3, 0.95);
    transform: translateX(-50%);
    &:hover {
      background-color: $blue-text-color;
      color: $light-color;
      &::before {
        transform: translate3d(0, -0.35em, 0);
        background-color: $blue-text-color;
      }
      &::after {
        transform: translate3d(0, 0.35em, 0);
        transition: background-color 225ms cubic-bezier(0.4, 0.25, 0.3, 1) 20ms,
          transform 225ms cubic-bezier(0.4, 0.25, 0.3, 1) 20ms;
        background-color: $blue-text-color;
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      transform: translateZ(0);
      z-index: -1;
      transition: background-color 225ms cubic-bezier(0.4, 0.25, 0.3, 1),
        transform 225ms cubic-bezier(0.4, 0.25, 0.3, 1);
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      transform: translateZ(0);
      z-index: -1;
      transition: background-color 225ms cubic-bezier(0.4, 0.25, 0.3, 1),
        transform 225ms cubic-bezier(0.4, 0.25, 0.3, 1);
    }
    // position: relative;
    // &::before {
    //   content: "";
    //   background-color: $blue-text-color;
    //   position: absolute;
    //   width: 100%;
    //   height: 2px;
    //   bottom: -6px;
    // }
  }
}
</style>
<template>
  <div class="arrow-btn">
    <button class="arrow-btn__btn">
      <span class="arrow-btn__circle" aria-hidden="true">
        <span class="arrow-btn__icon _arrow"></span>
      </span>
      <span class="arrow-btn__text">Check Now</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ArrowButton",
};
</script>

<style lang="scss">
.arrow-btn {
  &__btn {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    width: 12rem;
    height: auto;
    &:hover .arrow-btn__circle {
      width: 100%;
    }
    &:hover .arrow-btn__icon {
      background: $light-color;
      transform: translate(1rem, 0);
    }
    &:hover .arrow-btn__text {
      color: $light-color;
    }
  }
  &__circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    border-radius: 1.625rem;
    background: #206bff;
  }
  &__icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: $light-color;
    &._arrow {
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      left: 0.625rem;
      width: 1.125rem;
      height: 0.125rem;
      background: none;
      &::before {
        position: absolute;
        content: "";
        top: -0.31rem;
        right: 0.0625rem;
        width: 0.625rem;
        height: 0.625rem;
        border-top: 0.125rem solid #fff;
        border-right: 0.125rem solid #fff;
        transform: rotate(45deg);
      }
    }
  }
  &__text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #99a1a6;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
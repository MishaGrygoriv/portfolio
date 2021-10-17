<template>
  <div class="footer-social">
    <ul class="footer-social__list">
      <li
        class="footer-social__item"
        v-for="icon in socialIcons"
        :key="icon.name"
      >
        <a class="footer-social__link" :href="icon.href" target="_blank">
          <i :class="icon.classIconFooter"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterSocial",
  data() {
    return {
      socialIcons: this.$store.state.socialIcons,
    };
  },
};
</script>

<style lang="scss">
.footer-social {
  &__list {
    @include flex(stretch, stretch);
  }
  &__item {
    margin-right: 25px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__link {
    position: relative;
    @include flex(center, center);
    width: 40px;
    height: 40px;
    text-align: center;
    background: #333;
    border-radius: 50%;
    font-size: 20px;
    color: #666;
    transition: 0.5s;
    &:hover {
      color: #ffee10;
      box-shadow: 0 0 20px #ffee10;
      text-shadow: 0 0 5px #ffee10;
      &:before {
        transform: scale(1.1);
        box-shadow: 0 0 25px #ffee10;
      }
    }
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #ffee10;
      transition: 0.5s;
      transform: scale(0.9);
      z-index: -1;
    }
  }
}
</style>
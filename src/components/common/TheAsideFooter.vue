<template>
  <div class="aside-footer">
    <h2 class="aside-footer__title">{{ title }}</h2>
    <slot />
    <p class="aside-footer__description">{{ description }}</p>
    <ul class="aside-footer__list" v-if="listOfNames === true">
      <li class="aside-footer__item" v-for="item in footerList" :key="item.id">
        <div class="aside-footer__img-wrapper">
          <img
            class="aside-footer__img"
            :src="item.src"
            alt="img"
            v-if="item.src"
          />
        </div>
        <div class="aside-footer__title-wrapper">
          <h3 class="aside-footer__item-title">{{ item.title }}</h3>
        </div>
      </li>
    </ul>
    <button class="aside-footer__btn" v-if="btn === true">MyButton</button>
  </div>
</template>

<script>
export default {
  name: "TheAsideFooter",
  data() {
    return {
      footerList: this.$store.state.footerList,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    btn: {
      type: Boolean,
    },
    listOfNames: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss">
.aside-footer {
  // @include flex(stretch, stretch, column);
  &__title {
    @include text($H240, 600, $light-color);
    margin-bottom: 15px;
  }
  &__description {
    max-width: 450px;
    width: 100%;
  }
  &__list {
    @include flex(space-around, stretch);
    padding: 0 30px;
  }
  &__item {
    @include flex(stretch, stretch);
  }
  &__img-wrapper {
    @include flex(stretch, center);
  }
  &__img {
    width: 50px;
    height: 50px;
    &:first-child {
      width: 60px;
    }
  }
  &__title-wrapper {
    @include flex(stretch, center);
  }
}
</style>
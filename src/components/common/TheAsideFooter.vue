<template>
  <div class="aside-footer">
    <h2 class="aside-footer__title">{{ title }}</h2>
    <slot />
    <p class="aside-footer__description" v-if="description === true">
      The Game Website made with Vue Js, as well I've connected several
      libraries such as: 'Ant-Design-Vue', 'Lodash'. Besides, I added the
      database - 'Firebase', also the largest video game database - 'RAWG'.
      <span class="aside-footer__space">Just take a look by yourself!</span>
    </p>
    <arrow-button class="aside-footer__btn" v-if="btn === true" />
    <ul class="aside-footer__list" v-if="logoList === true">
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
  </div>
</template>

<script>
import ArrowButton from "./ArrowButton.vue";

export default {
  name: "TheAsideFooter",
  data() {
    return {
      footerList: this.$store.state.footerList,
    };
  },
  components: { ArrowButton },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: Boolean,
    },
    logoList: {
      type: Boolean,
    },
    btn: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss">
.aside-footer {
  &__title {
    @include text($H240, 600, $light-color);
    margin-bottom: 20px;
  }
  &__description {
    @include text($H70, 400, #99a1a6);
    max-width: 450px;
    width: 100%;
    line-height: 1.4;
    margin-bottom: 20px;
  }
  &__space {
    display: block;
  }
  &__btn {
    margin-bottom: 50px;
  }
  &__list {
    @include flex(stretch, stretch);
  }
  &__item {
    @include flex(stretch, stretch);
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__img-wrapper {
    @include flex(stretch, center);
  }
  &__img {
    width: 20px;
    height: 20px;
    &:first-child {
      width: 30px;
    }
  }
  &__title-wrapper {
    @include flex(stretch, center);
  }
  &__item-title {
    @include text($H70, 400, #e6f1ff);
  }
}
</style>
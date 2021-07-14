<template>
  <div class="title-background">
    <h2 class="title-background__back-title">{{ first_back_title }}</h2>
    <h2 class="title-background__back-title">{{ second_back_title }}</h2>
  </div>
</template>
<script>
export default {
  name: "TitleBackground",
  props: {
    first_back_title: String,
    second_back_title: String,
  },
};
</script>
<style lang="scss">
.title-background {
  margin-bottom: 60px;
  &__back-title {
    @include text(11rem, 800, $bg-text-color);
    letter-spacing: 18px;
    line-height: 110px;
    margin-bottom: 80px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
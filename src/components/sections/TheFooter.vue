<template>
  <div class="footer">
    <the-aside-footer class="footer__col _left" :title="firstTitle">
      <ul class="footer__info-list">
        <li class="footer__info-item">
          <a href="#" class="footer__address-link">
            <address class="footer__address">
              <span class="footer__info-title">Address:</span>Ukraine,
              Ivano-Frankivsk
            </address>
          </a>
        </li>
        <li class="footer__info-item">
          <a class="footer__phone" href="tel:+380669117354"
            ><span class="footer__info-title">Phone:</span>+38 066 911 7354</a
          >
          <a class="footer__mail" href="mailto:grygorivmisha@gmail.com">
            <span class="footer__info-title">E-mail:</span
            >grygorivmisha@gmail.com
          </a>
        </li>
      </ul>
      <!-- <top-nav-bar /> -->
      <footer-nav class="footer__navigation" />
      <div class="footer__social-wrapper">
        <footer-social class="footer__social-icons" />
        <h3 class="footer__copy">GRYGORIV © 2021</h3>
      </div>
    </the-aside-footer>
    <the-aside-footer
      class="footer__col _right"
      :title="secondTitle"
      :description="isDescription"
      :logoList="isLogoList"
      :btn="isBtn"
    >
    </the-aside-footer>
  </div>
</template>

<script>
import FooterSocial from "../common/FooterSocial.vue";
import TheAsideFooter from "../common/TheAsideFooter.vue";
import FooterNav from "../footer-nav/FooterNav.vue";
// import TopNavBar from "../top-nav-bar/TopNavBar.vue";

export default {
  name: "TheFooter",
  data: () => ({
    firstTitle: "Contact",
    secondTitle: "My Work Experience",
    isDescription: true,
    isLogoList: true,
    isBtn: true,
  }),
  // components: { TheAsideFooter, TopNavBar },
  components: { TheAsideFooter, FooterNav, FooterSocial },
};
</script>

<style lang="scss">
.footer {
  @include flex(space-around, stretch);
  &__col {
    background-color: #040404;
    width: 100%;
    padding: 50px 50px 30px 90px;
    text-align: start;
    &._left {
      @include flex(stretch, center, column);
    }
    &._right {
      background-color: #1b1d1f;
    }
  }
  &__info-list {
    @include flex(stretch, stretch);
    margin-bottom: 45px;
  }
  &__info-item {
    margin-right: 50px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__address-link {
    display: block;
  }
  &__phone {
    margin-bottom: 10px;
  }
  &__info-title {
    display: block;
    font-size: $H90;
    color: #e6f1ff;
    margin-bottom: 5px;
  }
  &__address,
  &__phone,
  &__mail {
    @include text($H70, 400, #99a1a6);
    display: block;
  }
  &__navigation {
    margin-bottom: 45px;
  }
  &__social-wrapper {
    @include flex(stretch, end);
  }
  &__social-icons {
    margin-right: 70px;
  }
  &__copy {
    @include text($H50, 300, #99a1a6);
  }
}
</style>
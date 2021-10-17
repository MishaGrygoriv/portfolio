<template>
  <div class="footer-nav">
    <ul class="footer-nav__list">
      <li class="footer-nav__item" v-for="route in routes" :key="route.name">
        <router-link
          active-class="_active"
          exact
          class="footer-nav__link"
          :to="route.path"
          >{{ route.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterNav",
  data() {
    return {
      routes: [
        {
          name: "About Me",
          path: "/about",
        },
        {
          name: "Projects",
          path: "/projects",
        },
        {
          name: "Interests",
          path: "/interests",
        },
        {
          name: "Contact",
          path: "/contact",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.footer-nav {
  &__list {
    transition: all 0.35s ease;
  }
  &__item {
    display: inline-block;
    list-style: outside none none;
    margin-right: 15px;
    &:last-child {
      margin-right: 0;
    }
    &:hover .footer-nav__link:before,
    &:hover .footer-nav__link:after {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
  &__link {
    padding: 0.5em 0.8em;
    color: rgba(255, 255, 255, 0.5);
    position: relative;
    text-decoration: none;
    font-size: 20px;
    &:hover {
      color: $light-color;
    }
    &:before {
      content: "";
      right: 0;
      top: 0;
      border-top: 3px solid $blue-text-color;
      border-right: 3px solid $blue-text-color;
      transform: translate(-100%, 50%);
    }
    &::after {
      content: "";
      left: 0;
      bottom: 0;
      border-bottom: 3px solid $blue-text-color;
      border-left: 3px solid $blue-text-color;
      transform: translate(100%, -50%);
    }
    &:before,
    &:after {
      content: "";
      height: 14px;
      width: 14px;
      position: absolute;
      transition: all 0.35s ease;
      opacity: 0;
    }
    // &:hover &:before,
    // &:hover &:after {
    //   transform: translate(0, 0);
    //   opacity: 1;
    // }
  }
}
</style>
<template>
  <div class="social-icons">
    <ul class="social-icons__list">
      <li
        class="social-icons__item"
        v-for="icon in socialIcons"
        :key="icon.name"
      >
        <a :href="icon.href" target="_blank" :class="icon.classLink">
          <i :class="icon.classIcon"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SocialIcons",
  data() {
    return {
      socialIcons: this.$store.state.socialIcons,
    };
  },
};
</script>

<style lang="scss">
.social-icons {
  &__list {
    @include flex(space-between, stretch);
    margin-bottom: 0;
    max-width: 400px;
    width: 100%;
  }
  &__item {
    &:nth-child(1) .social-icons__link {
      animation-delay: 0s;
    }
    &:nth-child(2) .social-icons__link {
      animation-delay: 0.07s;
    }
    &:nth-child(3) .social-icons__link {
      animation-delay: 0.14s;
    }
    &:nth-child(4) .social-icons__link {
      animation-delay: 0.21s;
    }
  }
  &__link {
    overflow: hidden;
    display: block;
    width: 45px;
    height: 45px;
    text-align: center;
    color: $text-color;
    border: 2px solid $social-color;
    background-color: $social-color;
    border-radius: 50%;
    line-height: 3.1;
    transition: all 0.4s ease-in-out;
    animation: bouncy 5s infinite linear;
    position: relative;
    &:hover {
      transform: rotate(360deg) scale(1.2);
      color: $light-color;
      &._github {
        background: #5a32a3;
        border: 2px solid rgba(#5a32a3, 0.7);
        box-shadow: 0 0 0 4px rgba(#5a32a3, 0.4);
        color: $dark-color;
      }
      &._linkedin,
      &._facebook {
        background: #0077b5;
        border: 2px solid rgba(#0077b5, 0.7);
        box-shadow: 0 0 0 4px rgba(#0077b5, 0.4);
      }
      &._instagram {
        background: radial-gradient(
          circle at 30% 107%,
          #fdf497 0%,
          #fdf497 5%,
          #fd5949 45%,
          #d6249f 60%,
          #285aeb 90%
        );
        border: 2px solid rgba(#e4405f, 0.7);
        box-shadow: 0 0 0 4px rgba(#e4405f, 0.4);
      }
      &._resume,
      &._youtube {
        background: #cb2027;
        border: 2px solid rgba(#cb2027, 0.7);
        box-shadow: 0 0 0 4px rgba(#cb2027, 0.4);
      }
    }
  }
  &__icon {
    &::before {
      font-size: $H300;
    }
  }
}
@keyframes bouncy {
  0% {
    top: 0em;
  }
  40% {
    top: 0em;
  }
  43% {
    top: -0.9em;
  }
  46% {
    top: 0em;
  }
  48% {
    top: -0.4em;
  }
  50% {
    top: 0em;
  }
  100% {
    top: 0em;
  }
}
</style>
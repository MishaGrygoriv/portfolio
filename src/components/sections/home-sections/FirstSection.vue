<template>
  <div class="first-section">
    <div class="first-section__left-col">
      <div class="first-section__bg-title-container">
        <h2 class="first-section__back-title">Michael</h2>
        <h2 class="first-section__back-title _second">Grygoriv</h2>
        <h1 class="first-section__front-title">
          Michael<span class="first-section__front-title">Grygoriv</span>
        </h1>
      </div>
      <h2 class="first-section__subtitle">Front-End Developer</h2>
      <the-triangle class="first-section__triangle _empty" />
      <full-triangle class="first-section__triangle" />
      <the-triangle class="first-section__triangle _black" />
      <!-- <ul class="first-section__social-list">
        <li
          class="first-section__social-item"
          v-for="icon in socialIcons"
          :key="icon.name"
        >
          <a :href="icon.href" target="_blank" :class="icon.classLink">
            <i :class="icon.classIcon"></i>
          </a>
        </li>
      </ul> -->
      <social-icons />
    </div>
    <div class="first-section__right-col">
      <img class="first-section__img" :src="image" />
    </div>
  </div>
</template>
<script>
import image from "@/assets/michael.png";
import TheTriangle from "../../icons/TheTriangle";
import FullTriangle from "../../icons/FullTriangle";
import SocialIcons from "../../common/SocialIcons.vue";

export default {
  name: "FirstSections",
  components: {
    TheTriangle,
    FullTriangle,
    SocialIcons,
  },
  data() {
    return {
      image: image,
      socialIcons: this.$store.state.socialIcons,
    };
  },
};
</script>
<style lang="scss">
.first-section {
  @include flex(space-between, stretch);
  margin-bottom: 100px;
  &__left-col {
    position: relative;
  }
  &__bg-title-container {
    position: relative;
    margin-bottom: 60px;
  }
  &__back-title {
    @include text(100px, 800, $bg-text-color);
    letter-spacing: 18px;
    line-height: 110px;
    margin-bottom: 30px;
    &._second {
      margin-bottom: 0;
      &::after {
        content: "";
        position: absolute;
        width: 100px;
        height: 5px;
        background-color: $dark-color;
        bottom: 2px;
        right: -60px;
      }
    }
  }
  &__front-title {
    @include text(70px, 400, $light-color);
    letter-spacing: 18px;
    position: absolute;
    top: 50px;
    left: 113px;
    span {
      display: block;
      @include text(70px, 600, $light-color);
      top: 61px;
      left: -42px;
    }
  }
  &__subtitle {
    @include text($H200, 400, $blue-text-color);
    text-align: left;
    margin-bottom: 45px;
  }
  &__triangle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 120px;
    &._empty {
      left: 178px;
      top: 25px;
      fill: #206bff;
      transform: rotate(45deg);
      fill: $blue-text-color;
    }
    &._black {
      top: 212px;
      right: -85px;
      width: 25px;
      height: 25px;
    }
  }
  // &__social-list {
  //   @include flex(space-between, stretch);
  //   margin-bottom: 0;
  //   max-width: 400px;
  //   width: 100%;
  // }
  // &__social-item {
  //   &:nth-child(1) .first-section__social-link {
  //     animation-delay: 0s;
  //   }
  //   &:nth-child(2) .first-section__social-link {
  //     animation-delay: 0.07s;
  //   }
  //   &:nth-child(3) .first-section__social-link {
  //     animation-delay: 0.14s;
  //   }
  //   &:nth-child(4) .first-section__social-link {
  //     animation-delay: 0.21s;
  //   }
  // }
  // &__social-link {
  //   overflow: hidden;
  //   display: block;
  //   width: 45px;
  //   height: 45px;
  //   text-align: center;
  //   color: $text-color;
  //   border: 2px solid $social-color;
  //   background-color: $social-color;
  //   border-radius: 50%;
  //   line-height: 3.1;
  //   transition: all 0.4s ease-in-out;
  //   animation: bouncy 5s infinite linear;
  //   position: relative;
  //   &:hover {
  //     transform: rotate(360deg) scale(1.2);
  //     color: $light-color;
  //     &._github {
  //       background: #5a32a3;
  //       border: 2px solid rgba(#5a32a3, 0.7);
  //       box-shadow: 0 0 0 4px rgba(#5a32a3, 0.4);
  //       color: $dark-color;
  //     }
  //     &._linkedin {
  //       background: #0077b5;
  //       border: 2px solid rgba(#0077b5, 0.7);
  //       box-shadow: 0 0 0 4px rgba(#0077b5, 0.4);
  //     }
  //     &._instagram {
  //       background: radial-gradient(
  //         circle at 30% 107%,
  //         #fdf497 0%,
  //         #fdf497 5%,
  //         #fd5949 45%,
  //         #d6249f 60%,
  //         #285aeb 90%
  //       );
  //       border: 2px solid rgba(#e4405f, 0.7);
  //       box-shadow: 0 0 0 4px rgba(#e4405f, 0.4);
  //     }
  //     &._resume {
  //       background: #cb2027;
  //       border: 2px solid rgba(#cb2027, 0.7);
  //       box-shadow: 0 0 0 4px rgba(#cb2027, 0.4);
  //     }
  //   }
  // }
  &__social-icon {
    &::before {
      font-size: $H300;
    }
  }
  &__right-col {
    @include flex(space-around, stretch);
  }
  &__img {
    width: 430px;
    position: relative;
    right: 50px;
    bottom: 20px;
  }
}
// @keyframes bouncy {
//   0% {
//     top: 0em;
//   }
//   40% {
//     top: 0em;
//   }
//   43% {
//     top: -0.9em;
//   }
//   46% {
//     top: 0em;
//   }
//   48% {
//     top: -0.4em;
//   }
//   50% {
//     top: 0em;
//   }
//   100% {
//     top: 0em;
//   }
// }
</style>
<template>
  <div class="soo">
    <div class="social-icons">
      <div class="icon facebook" title="Facebook">
        <a></a>
      </div>
      <div class="icon twitter" title="Twitter">
        <a></a>
      </div>
      <div class="icon pinterest" title="Pinterest">
        <a></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test2",
};
</script>

<style lang="scss" scoped>
.soo {
  position: relative;
}
.social-icons {
  @include center;
  display: block;
  padding: 5px;
  position: absolute;
  text-align: center;
  .icon {
    @include transition;
    cursor: pointer;
    display: inline-block;
    height: 55px;
    font-size: 0;
    position: relative;
    text-align: center;
    width: 55px;
    &:not(:last-child) {
      margin: 0 20px 0 0;
    }
    &::before {
      @include transition(all, 0.6s, cubic-bezier(0.5, 0, 0.1, 1.5));
      // border-radius: 1px;
      border-radius: 50%;
      bottom: 0;
      content: "";
      display: block;
      height: 0;
      left: 0;
      margin: auto;
      position: absolute;
      right: 0;
      top: 0;
      width: 0;
      z-index: -1;
    }
    &:hover {
      color: rgb(219, 236, 199);
      &::before {
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
        height: 50px;
        width: 50px;
      }
    }
    a {
      @include center;
      display: block;
      font-family: "FontAwesome", sans-serif;
      font-size: 34px;
      position: relative;
      &::before {
        display: block;
      }
    }
  }
}

.facebook {
  &::before {
    background: #3b5998;
  }
  a {
    &::before {
      content: "\f09a";
    }
  }
}

.twitter {
  &::before {
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
  a {
    &::before {
      content: "\f099";
    }
  }
}

.pinterest {
  &::before {
    background: #bd081c;
  }
  a {
    &::before {
      content: "\f231";
    }
  }
}
</style>
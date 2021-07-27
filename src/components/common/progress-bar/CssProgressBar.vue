<template>
  <div class="css-progress" @mouseover="changeState" @mouseout="originalState">
    <vue-ellipse-progress
      class="css-progress__circle"
      :progress="progress"
      :emptyColorFill="emptyColorFill"
      v-bind="options"
    >
      <span class="css-progress__value" slot="legend-value">%</span>
      <p class="css-progress__caption" slot="legend-caption">CSS SKILLS</p>
    </vue-ellipse-progress>
  </div>
</template>
<script>
export default {
  name: "CssProgressBar",
  data: () => ({
    progress: 0,
    options: {
      color: "#7579ff",
      emptyColor: "#324c7e",
      size: 180,
      thickness: 5,
      emptyThickness: 3,
      lineMode: "in 10",
      animation: "bounce 1200 1000",
      fontSize: "1.5rem",
      fontColor: "#fff",
      dash: "5",
      noData: true,
    },
    emptyColorFill: {
      radial: true,
      colors: [
        {
          color: "#3260FC",
          offset: "50",
          opacity: "0.2",
        },
        {
          color: "#3260FC",
          offset: "50",
          opacity: "0.15",
        },
        {
          color: "#3260FC",
          offset: "70",
          opacity: "0.1",
        },
        {
          color: "#3260FC",
          offset: "90",
          opacity: "0.1",
        },
        {
          color: "transparent",
          offset: "90",
          opacity: "0.1",
        },
        {
          color: "transparent",
          offset: "95",
          opacity: "0.1",
        },
        {
          color: "transparent",
          offset: "95",
          opacity: "0.1",
        },
      ],
    },
  }),
  methods: {
    changeState() {
      this.progress = 100;
      this.options.noData = false;
    },
    originalState() {
      this.options.progress = 0;
      this.options.noData = true;
    },
  },
};
</script>
<style lang="scss">
.css-progress {
  &:hover &__caption {
    @include text($H90, 400, #224f7c);
    @include transition();
    animation: none;
  }
  &__circle {
    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba($blue-text-color, 0.1);
      border-radius: 50%;
      width: 60px;
      height: 60px;
      opacity: 0;
      margin: auto;
    }
    &:before {
      animation: pulse 3.5s infinite linear;
    }
    &:after {
      animation: pulse 4s 1.5s infinite linear;
    }
    &:hover:before,
    &:hover:after {
      display: none;
    }
  }
  &__value {
    @include text($H210, 400, $progress-text-color);
  }
  &__caption {
    @include text($H90, 400, #2c3e50);
    animation: breath 8s infinite linear;
  }
}
@keyframes pulse {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  33% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
@keyframes breath {
  0% {
    transform: scale(0.9);
  }
  25% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
</style>
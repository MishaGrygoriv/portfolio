<template>
  <div class="slider-snippet">
    <vueper-slides>
      <vueper-slide v-for="i in 5" :key="i" :title="i.toString()" />
    </vueper-slides>
  </div>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "MainSlider",
  components: { VueperSlides, VueperSlide },
  data: () => ({
    slides: [
      {
        title: "Slide #1",
        content: "Slide content.",
      },
    ],
  }),
};
</script>
<style lang="scss">
.vueperslide {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  animation: gradient 15s ease infinite;
  background-size: 400% 400%;
  &__title {
    font-size: 7em;
    opacity: 0.6;
  }
}
@keyframes gradient {
  0% {
    background-position: 0 50%;
  }

  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
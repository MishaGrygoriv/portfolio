<template>
  <div class="footer">
    <the-aside-footer class="footer__col _left" :title="firstTitle">
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
      <h4>baaaaackckkkk</h4>
    </the-aside-footer>
    <the-aside-footer
      class="footer__col _right"
      :title="secondTitle"
      :description="description"
      :btn="viewBtn"
      :listOfNames="list"
    >
    </the-aside-footer>
  </div>
</template>

<script>
import TheAsideFooter from "../common/TheAsideFooter.vue";

export default {
  name: "TheFooter",
  data: () => ({
    list: true,
    viewBtn: true,
    firstTitle: "Contact",
    secondTitle: "My Work Experience",
    posts: [
      { id: 1, title: "My journey with Vue" },
      { id: 2, title: "Blogging with Vue" },
      { id: 3, title: "Why Vue is so fun" },
    ],
    description:
      "My first the biggest project I've made was the Gaming Website. The website made with Vue Js, also I have connected several libraries such as: 'Ant-Design-Vue', 'Lodash' and a few plugins: 'Vuex', 'Vue-Router'. Besides, I added the Database - 'Firebase', also the largest video game database and game discovery service - 'RAWG'. As well, I used preprocessor 'SASS' and methodology 'BEM'. Just take a look by yourself!",
  }),
  components: { TheAsideFooter },
};
</script>

<style lang="scss">
.footer {
  @include flex(space-around, stretch);
  &__col {
    background-color: #040404;
    width: 100%;
    padding: 50px;
    text-align: start;
    &._left {
      @include flex(stretch, center, column);
    }
    &._right {
      background-color: #1b1d1f;
    }
  }
}
</style>
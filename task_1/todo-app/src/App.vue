<template>
  <header>
    <TodoTitle />
  </header>
  <main>
    <PageWrapper>
      <TodoTitle />
    </PageWrapper>
  </main>
</template>

<script>
import PageWrapper from "./components/PageWrapper.vue";
import TodoTitle from "./components/TodoTitle.vue";

export default {
  name: "App",
  components: {
    PageWrapper,
    TodoTitle,
  },
};
</script>

<style scoped lang="scss">
@import "./assets/scss/global";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $primary-font;
}

body {
  background-color: lightgray;
}
</style>

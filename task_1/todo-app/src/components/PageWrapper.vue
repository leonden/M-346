<template>
  <div class="pagewrapper">
    <TodoInput />
    <TodoTile />
  </div>
</template>

<script>
import TodoTile from "./TodoTile.vue";
import TodoInput from "./TodoInput.vue";

export default {
  name: "TodoContainer",
  components: {
    TodoTile,
    TodoInput,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/global";

.pagewrapper {
  padding: 0 20%;
  width: 100%;
  height: fit-content;
  @include flex-center;
}

@media (min-width: 786px) {
  .pagewrapper {
    padding: 0 10%;
  }
}
</style>

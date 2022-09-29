<template>
  <div class="todo-tile"></div>
</template>

<script>
export default {
  name: "TodoTile",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/global";

.todo-tile {
  width: 100%;
  height: 2em;
  font-family: $primary-font;
  background-color: $tile-color;
}
</style>

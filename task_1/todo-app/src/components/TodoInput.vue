<template>
  <div class="input-container">
    <form action="">
      <input type="text" class="create-tile" placeholder="Add To-Do" />
      <button type="submit" class="add-tile"></button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/global";

.input-container {
  width: 100%;
  height: fit-content;
  @include flex-row;
}

.create-tile {
  width: 75%;
  height: 2.5em;
  border-radius: 10px;
  border: 2px solid gray;
  font-size: 1em;
  font-family: $primary-font;
  &:focus-visible {
    outline: none;
  }
}

.add-tile {
  width: 20%;
}
</style>

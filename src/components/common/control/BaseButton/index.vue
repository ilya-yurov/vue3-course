<template>
  <button
      class="button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "base-button"
}
</script>

<style scoped>
  .button {
    border-radius: 10px;
    padding: 10px 15px;
    background: none;
  }
</style>

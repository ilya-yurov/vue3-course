<template>
  <input
      type="text"
      class="input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: "base-input",
  props: {
    modelValue: {
      type: [String, Number]
    }
  }
}
</script>

<style scoped>
  .input {
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    border: 2px solid teal;
    border-radius: 4px;
  }
</style>

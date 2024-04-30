<template>
  <div class="post">
    <div>
      <div>
        <strong>Название:</strong>
        {{ post.title }}
      </div>
      <div>
        <strong>Описание:</strong>
        {{ post.body }}
      </div>
    </div>
    <div class="buttons">
      <base-button @click="$emit('remove', post)">
        Удалить
      </base-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .post {
    border-radius: 4px;
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .buttons {
  }
</style>
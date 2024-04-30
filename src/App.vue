
<!--Тут пишется разметка-->
<template>
  <div class="app">
    <post-form @create="createPost"/>
    <post-list :posts="posts" />
  </div>
</template>

<!--Тут пишется JS-->
<!--Отсюда экспортируется компонент-->
<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList.vue";
export default {
  components: {
    PostList,
    PostForm
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'JavaScript', body: 'Javascript - это язык программирования'},
        {id: 2, title: 'Vue', body: 'Vue - это фреймворк'},
        {id: 3, title: 'React', body: 'React - это фреймворк'}
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    }
  }
}
</script>

<!--Тут описываются стили-->
<!--scoped показывает, что эти стили применяются только к данному компоненту-->
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .app {
    padding: 20px;
  }
</style>

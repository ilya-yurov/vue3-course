<template>
    <form class="form" @submit.prevent>
        <h3>Создание поста</h3>
        <base-input placeholder="Название поста" v-model="post.title" v-focus />
        <base-input placeholder="Описание поста" v-model="post.body" />
        <base-button class="button" @click="createPost"> Создать </base-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post);

            this.post = {
                title: '',
                body: ''
            };
        }
    }
};
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
}

.button {
    margin-top: 15px;
    align-self: flex-end;
}
</style>

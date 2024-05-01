<template>
    <div v-if="posts.length > 0">
        <h3 class="header">Список постов</h3>
        <transition-group name="post-list">
            <item
                v-for="post in posts"
                :post="post"
                :key="post.id"
                @remove="$emit('remove', post)"
            />
        </transition-group>
    </div>
    <h2 v-else class="emptyText">Список постов пуст</h2>
</template>

<script>
import Item from './Item';

export default {
    components: { Item },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>
.emptyText {
    color: red;
}

/* Анимации */
.post-list-move,
.post-list-enter-active,
.post-list-leave-active {
    transition: all 0.5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.post-list-leave-active {
    position: absolute;
}
</style>

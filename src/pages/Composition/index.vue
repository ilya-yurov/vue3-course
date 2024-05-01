<template>
    <div class="wrapper">
        <h1>Страница постов</h1>
        <div class="app__buttons">
            <base-input
                v-model="searchQuery"
                placeholder="Поиск по названию"
                v-focus
            />
            <base-select v-model="selectedSort" :options="sortOptions" />
        </div>
        <div class="postContainer">
            <post-list v-if="!isPostsLoading" :posts="sortedAndSearchedPosts" />
            <div v-else>Идет загрузка...</div>
        </div>
    </div>
</template>

<script>
import PostList from '@/pages/Posts/List';
import Modals from '@/pages/Posts/Modals';
import { usePosts } from '@/hooks/usePosts';
import useSortedPosts from '@/hooks/useSortedPosts';
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts';
export default {
    components: {
        PostList,
        Modals
    },
    data() {
        return {
            modalState: {
                isPostModalOpen: false
            },
            sortOptions: [
                {
                    value: 'title',
                    label: 'По названию'
                },
                {
                    value: 'body',
                    label: 'По содержимому'
                }
            ]
        };
    },
    setup() {
        const { posts, isPostsLoading, totalPages } = usePosts(10);
        const { sortedPosts, selectedSort } = useSortedPosts(posts);
        const { sortedAndSearchedPosts, searchQuery } =
            useSortedAndSearchedPosts(sortedPosts);

        return {
            posts,
            isPostsLoading,
            totalPages,
            sortedPosts,
            selectedSort,
            sortedAndSearchedPosts,
            searchQuery
        };
    }
};
</script>

<style scoped>
.postContainer {
    height: calc(100vh - var(--header-height) - 150px);
    overflow-y: scroll;
    overflow-x: hidden;
}

.app__buttons {
    display: grid;
    grid-auto-flow: column;
    column-gap: 20px;
    margin: 15px 0;
}
</style>

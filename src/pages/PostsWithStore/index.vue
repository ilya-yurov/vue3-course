<template>
    <div class="wrapper">
        <h1>Страница постов</h1>
        <div class="app__buttons">
            <base-input
                :model-value="searchQuery"
                placeholder="Поиск по названию"
                @update:model-value="setSearchQuery"
                v-focus
            />
            <base-select
                :model-value="selectedSort"
                :options="sortOptions"
                @update:model-value="setSelectedSort"
            />
        </div>
        <div class="postContainer">
            <post-list
                v-if="!isLoading"
                :posts="sortedAndSearchedPosts"
                @remove="removePost"
            />
            <div v-else>Идет загрузка...</div>
            <div v-intersection="loadMorePosts" class="observer" />
        </div>
    </div>
</template>

<script>
import PostList from '@/pages/Posts/List';
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
export default {
    components: {
        PostList
    },
    methods: {
        ...mapActions({
            removePost: 'post/removePost',
            loadMorePosts: 'post/loadMorePosts',
            fetchPosts: 'post/fetchPosts'
        }),
        ...mapMutations({
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort'
        })
    },
    computed: {
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
        }),
        ...mapState({
            searchQuery: (state) => state.post.searchQuery,
            selectedSort: (state) => state.post.selectedSort,
            posts: (state) => state.post.posts,
            isLoading: (state) => state.post.isLoading,
            modificatorValue: (state) => state.post.modificatorValue,
            page: (state) => state.post.page,
            limit: (state) => state.post.limit,
            totalPages: (state) => state.post.totalPages,
            sortOptions: (state) => state.post.sortOptions
        })
    },
    mounted() {
        this.fetchPosts();
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

.observer {
    height: 30px;
    background-color: aqua;
}
</style>

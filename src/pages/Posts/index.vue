<template>
    <div class="wrapper">
        <h1>Страница постов</h1>
        <div class="app__buttons">
            <base-input
                v-model="searchQuery"
                placeholder="Поиск по названию"
                v-focus
            />
            <base-button @click="openModal('isPostModalOpen')">
                Создать пост
            </base-button>
            <base-select v-model="selectedSort" :options="sortOptions" />
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
        <!--    <pagination-->
        <!--      :totalPages="totalPages"-->
        <!--      :currentPage="page"-->
        <!--      @update:currentPage="page = $event"-->
        <!--    />-->
        <modals
            :createPost="createPost"
            :modalState="modalState"
            @update:modalState="setIsModalOpen"
        />
    </div>
</template>

<script>
import PostList from './List';
import Modals from './Modals';
import axios from 'axios';
export default {
    components: {
        PostList,
        Modals
    },
    data() {
        return {
            posts: [],
            isLoading: false,
            modalState: {
                isPostModalOpen: false
            },
            modificatorValue: '',
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
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
    methods: {
        createPost(post) {
            this.posts.push(post);

            this.modalState.isPostModalOpen = false;
        },
        removePost(post) {
            this.posts = this.posts.filter((p) => p.id !== post.id);
        },
        openModal(key) {
            this.modalState[key] = true;
        },
        setIsModalOpen(state) {
            this.modalState = { ...this.modalState, ...state };
        },
        async fetchPosts() {
            try {
                this.isLoading = true;

                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts',
                    {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    }
                );

                this.totalPages = Math.ceil(
                    response.headers['x-total-count'] / this.limit
                );
                this.posts = response.data;
            } catch (e) {
                console.error(e);
            } finally {
                this.isLoading = false;
            }
        },
        async loadMorePosts() {
            try {
                this.page += 1;

                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts',
                    {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    }
                );

                this.totalPages = Math.ceil(
                    response.headers['x-total-count'] / this.limit
                );
                this.posts = [...this.posts, ...response.data];
            } catch (e) {
                console.error(e);
            }
        }
    },
    mounted() {
        this.fetchPosts();

        // const options = {
        //   rootMargin: "0px",
        //   threshold: 1.0,
        // };
        //
        // const callback = (entries) => {
        //   if (entries[0].isIntersecting && this.page < this.totalPages) {
        //     this.loadMorePosts()
        //   }
        // }
        //
        // const observer = new IntersectionObserver(callback, options);
        // observer.observe(this.$refs.observer);
    },
    watch: {
        // page() {
        //   this.fetchPosts();
        // }
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((a, b) =>
                a[this.selectedSort]?.localeCompare(b[this.selectedSort])
            );
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter((post) =>
                post.title
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase())
            );
        }
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

import axios from 'axios';

export const postModule = {
    state: () => ({
        posts: [],
        isLoading: false,
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
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((a, b) =>
                a[state.selectedSort]?.localeCompare(b[state.selectedSort])
            );
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter((post) =>
                post.title
                    .toLowerCase()
                    .includes(state.searchQuery.toLowerCase())
            );
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setIsLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
        setModificatorValue(state, modificatorValue) {
            state.modificatorValue = modificatorValue;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
        setPage(state, page) {
            state.page = page;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        }
    },
    actions: {
        async fetchPosts({ state, commit }) {
            try {
                commit('setIsLoading', true);

                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts',
                    {
                        params: {
                            _page: state.page,
                            _limit: state.limit
                        }
                    }
                );

                commit(
                    'setTotalPages',
                    Math.ceil(response.headers['x-total-count'] / state.limit)
                );
                commit('setPosts', response.data);
            } catch (e) {
                console.error(e);
            } finally {
                commit('setIsLoading', false);
            }
        },
        async loadMorePosts({ state, commit }) {
            try {
                commit('setPage', state.page + 1);

                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts',
                    {
                        params: {
                            _page: state.page,
                            _limit: state.limit
                        }
                    }
                );

                commit(
                    'setTotalPages',
                    Math.ceil(response.headers['x-total-count'] / state.limit)
                );
                commit('setPosts', [...state.posts, ...response.data]);
            } catch (e) {
                console.error(e);
            }
        },
        removePost({ state, commit }, post) {
            commit(
                'setPosts',
                state.posts.filter((p) => p.id !== post.id)
            );
        }
    },
    namespaced: true
};

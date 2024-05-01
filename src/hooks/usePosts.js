import axios from 'axios';
import { onMounted, ref } from 'vue';

export function usePosts(limit) {
    const posts = ref([]);
    const totalPages = ref(0);
    const isPostsLoading = ref(true);

    const fetchPosts = async () => {
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/posts',
                {
                    params: {
                        _page: 1,
                        _limit: limit
                    }
                }
            );

            totalPages.value = Math.ceil(
                response.headers['x-total-count'] / limit
            );
            posts.value = response.data;
        } catch (e) {
            console.error(e);
        } finally {
            isPostsLoading.value = false;
        }
    };

    onMounted(fetchPosts);

    return { posts, totalPages, isPostsLoading };
}

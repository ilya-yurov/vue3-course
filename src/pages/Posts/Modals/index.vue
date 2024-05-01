<template>
    <div>
        <create-post-modal
            :isOpen="modalState.isPostModalOpen"
            :createPost="createPost"
            @update:isOpen="
                $emit('update:modalState', {
                    isPostModalOpen: $event
                })
            "
        />
    </div>
</template>

<script>
import CreatePostModal from './CreatePost';
export default {
    props: {
        createPost: {
            type: Function,
            required: true
        },
        modalState: {
            isPostModalOpen: {
                type: Boolean
            }
        }
    },
    components: { CreatePostModal }
};
</script>

<style scoped></style>

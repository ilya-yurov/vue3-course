<template>
    <modal :isOpen="isOpen" @update:isOpen="setIsOpen">
        <post-form @create="createPost" />
    </modal>
</template>

<script>
import PostForm from './Form';
import modalMixin from '@/mixins/modalMixin';

export default {
    name: 'create-post-modal',
    components: { PostForm },
    props: {
        mixins: [modalMixin],
        createPost: {
            type: Function,
            required: true
        }
    }
};
</script>

<style scoped></style>

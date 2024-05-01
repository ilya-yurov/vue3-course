<template>
    <div class="overlay" v-if="isOpen" @click="$emit('update:isOpen', false)">
        <div @click.stop class="modal">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BaseButton from '@/components/common/control/BaseButton/index.vue';

export default {
    name: 'modal',
    components: { BaseButton },
    props: {
        isOpen: {
            type: Boolean,
            default: true
        }
    }
};
</script>

<style scoped>
.overlay {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}

.modal {
    margin: auto;
    background: white;
    border-radius: 10px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px;
}
</style>

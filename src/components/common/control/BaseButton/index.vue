<template>
    <router-link v-if="type === 'link'" :to="to" class="button">
        <slot></slot>
    </router-link>
    <button v-else class="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'base-button',
    props: {
        type: {
            type: String,
            default: 'button'
        },
        to: {
            type: String,
            default: ''
        }
    }
};
</script>

<style scoped>
.button {
    border-radius: 10px;
    padding: 10px 15px;
    border: 1px solid black;
    background-color: white;
    text-decoration: none;
    color: black;
    cursor: pointer;
}

.button:hover {
    background-color: aquamarine;
}
</style>

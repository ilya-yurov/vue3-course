<template>
    <nav class="navbar">
        <base-button :type="'link'" :to="HOME">Home</base-button>
        <base-button :type="'link'" :to="POSTS">Posts</base-button>
        <base-button :type="'link'" :to="ABOUT">About</base-button>
        <base-button :type="'link'" :to="STORE">Store</base-button>
        <base-button :type="'link'" :to="COMPOSITION">Composition</base-button>
    </nav>
</template>

<script>
import { ABOUT, HOME, POSTS, STORE, COMPOSITION } from '@/constant/routes';

export default {
    name: 'navbar',
    data() {
        return {
            HOME,
            ABOUT,
            POSTS,
            STORE,
            COMPOSITION
        };
    }
};
</script>

<style scoped>
.navbar {
    display: grid;
    grid-auto-flow: column;
    column-gap: 20px;
    width: fit-content;
}
</style>

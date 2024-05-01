<template>
    <header class="header">
        <span class="logo" />
        <navbar />
    </header>
</template>

<script>
import Navbar from './Navbar';
export default {
    name: 'main-header',
    components: {
        Navbar
    }
};
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: darkcyan;
    padding: 20px;
}

.logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #2c3e50;
}
</style>

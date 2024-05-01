<template>
    <div class="wrapper">
        <div v-for="page in totalPages" :key="page">
            <base-button
                class="button"
                :class="{ currentPage: page === currentPage }"
                @click="$emit('update:currentPage', page)"
            >
                {{ page }}
            </base-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pagination',
    props: {
        totalPages: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        }
    }
};
</script>

<style scoped>
.wrapper {
    margin: 20px auto 0;
    display: grid;
    grid-auto-flow: column;
    column-gap: 10px;
    width: fit-content;
}

.button {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.currentPage {
    border: 2px solid red;
}
</style>

<template>
    <select
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
    >
        <option disabled value="">Выберите значение</option>
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.label }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'base-select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<style scoped></style>

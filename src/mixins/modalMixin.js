export default {
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        setIsOpen(event) {
            this.$emit('update:isOpen', event);
        }
    }
};

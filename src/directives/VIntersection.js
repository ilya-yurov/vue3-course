export default {
    mounted(el, binding) {
        const { value } = binding;
        const callback = value;
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    callback();
                }
            });
        }, options);

        observer.observe(el);
    },
    name: 'intersection'
};

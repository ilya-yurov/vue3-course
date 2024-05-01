<!--Тут пишется разметка-->
<template>
    <div>
        <main-header />
        <div class="pages">
            <router-view></router-view>
        </div>
    </div>
</template>

<!--Тут пишется JS-->
<!--Отсюда экспортируется компонент-->
<script>
import MainHeader from '@/components/layout/Header/index.vue';

export default {
    components: { MainHeader }
};
</script>

<!--Тут описываются стили-->
<!--scoped показывает, что эти стили применяются только к данному компоненту-->
<style>
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

p,
h4,
h3,
h2,
h1 {
    margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

body {
    --header-height: 90px;
}

* {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
}

.pages {
    padding: 20px;
}
</style>

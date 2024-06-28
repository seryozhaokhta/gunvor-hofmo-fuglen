<!-- src/components/MainApp.vue -->

<template>
    <div class="main-app">
        <BackgroundApp />
        <div class="content">
            <h1></h1>
        </div>
    </div>
</template>

<script>
import BackgroundApp from './BackgroundApp.vue';

export default {
    name: 'MainApp',
    components: {
        BackgroundApp,
    },
};
</script>

<style scoped>
.main-app {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.content {
    position: relative;
    z-index: 1;
}
</style>

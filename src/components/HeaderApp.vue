<!-- src/components/HeaderApp.vue -->

<template>
    <header>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/gallery">Gallery</router-link>
            <router-link to="/poems">Poems</router-link>
            <router-link to="/history">History</router-link>
        </nav>
        <div class="language-switcher">
            <button @click="setLocale('en')">EN</button>
            <button @click="setLocale('no')">NO</button>
            <button @click="setLocale('ru')">RU</button>
        </div>
    </header>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
    name: 'HeaderApp',
    setup() {
        const { locale } = useI18n();

        const setLocale = (lang) => {
            locale.value = lang;
        };

        return {
            setLocale
        };
    }
};
</script>

<style scoped>
header {
    background-color: #f8f9fa;
    padding: 10px;
}

nav {
    display: flex;
    justify-content: center;
    gap: 15px;
}

.language-switcher {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.language-switcher button {
    margin: 0 5px;
    padding: 5px 10px;
}
</style>
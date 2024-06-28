<!-- src/components/HeaderApp.vue -->

<template>
    <header class="header">
        <router-link to="/" class="home-link">Home</router-link>
        <button class="burger-menu" @click="toggleBurgerMenu">
            <span :class="{ 'active': burgerMenu }"></span>
            <span :class="{ 'active': burgerMenu }"></span>
            <span :class="{ 'active': burgerMenu }"></span>
        </button>
        <nav class="nav" :class="{ active: burgerMenu || largeScreen }">
            <router-link to="/gallery" @click="closeBurgerMenu">Gallery</router-link>
            <router-link to="/poems" @click="closeBurgerMenu">Poems</router-link>
            <router-link to="/history" @click="closeBurgerMenu">History</router-link>
            <div class="language-switcher-mobile" v-if="!largeScreen">
                <button @click="setLocale('en')" :class="{ 'active': currentLanguage === 'en' }">EN</button>
                <button @click="setLocale('no')" :class="{ 'active': currentLanguage === 'no' }">NO</button>
                <button @click="setLocale('ru')" :class="{ 'active': currentLanguage === 'ru' }">RU</button>
            </div>
        </nav>
        <div class="language-switcher" v-if="largeScreen">
            <button @click="setLocale('en')" :class="{ 'active': currentLanguage === 'en' }">EN</button>
            <button @click="setLocale('no')" :class="{ 'active': currentLanguage === 'no' }">NO</button>
            <button @click="setLocale('ru')" :class="{ 'active': currentLanguage === 'ru' }">RU</button>
        </div>
    </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from 'vue-i18n';

export default {
    name: 'HeaderApp',
    setup() {
        const { locale } = useI18n();

        const burgerMenu = ref(false);
        const largeScreen = ref(window.innerWidth > 800);
        const currentLanguage = ref(locale.value);

        const resizeListener = () => {
            largeScreen.value = window.innerWidth > 800;
            if (largeScreen.value) burgerMenu.value = false;
        };

        onMounted(() => {
            window.addEventListener("resize", resizeListener);
        });

        onUnmounted(() => {
            window.removeEventListener("resize", resizeListener);
        });

        const toggleBurgerMenu = () => {
            burgerMenu.value = !burgerMenu.value;
        };

        const closeBurgerMenu = () => {
            burgerMenu.value = false;
        };

        const setLocale = (lang) => {
            locale.value = lang;
            currentLanguage.value = lang;
        };

        return {
            setLocale,
            toggleBurgerMenu,
            closeBurgerMenu,
            burgerMenu,
            largeScreen,
            currentLanguage
        };
    }
};
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: #f8f9fa;
    z-index: 1000;
}

.home-link {
    margin-right: auto;
}

.nav {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-grow: 1;
    transition: top 0.3s ease-in-out;
}

.burger-menu {
    display: none;
}

.burger-menu span {
    width: 25px;
    height: 3px;
    background-color: black;
    display: block;
    margin-bottom: 5px;
    transition: all 0.5s ease;
}

.burger-menu span.active:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.burger-menu span.active:nth-child(2) {
    opacity: 0;
}

.burger-menu span.active:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

.language-switcher,
.language-switcher-mobile {
    display: flex;
    gap: 15px;
}

.language-switcher button,
.language-switcher-mobile button {
    background-color: lightgray;
    color: black;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.language-switcher button.active,
.language-switcher-mobile button.active {
    background-color: darkgray;
}

@media (max-width: 768px) {
    .header {
        flex-direction: row;
    }

    .home-link {
        order: 1;
        margin-right: 0;
    }

    .burger-menu {
        order: 2;
        display: block;
        cursor: pointer;
    }

    .nav {
        position: fixed;
        top: -100%;
        right: 0;
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #f8f9fa;
        transition: top 0.3s ease-in-out;
    }

    .nav.active {
        top: 0;
    }

    .nav a {
        margin: 1rem 0;
    }

    .language-switcher {
        display: none;
    }

    .language-switcher-mobile {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-top: 1rem;
    }
}
</style>

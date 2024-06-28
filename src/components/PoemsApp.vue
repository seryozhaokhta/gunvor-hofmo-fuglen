<!-- src/components/PoemsApp.vue -->

<template>
    <div>
        <button class="sidebar-toggle" @click="toggleSidebar">{{ sidebarButtonText }}</button>
        <SidebarApp :isOpen="isSidebarOpen" :poems="poems" @select="handlePoemSelect" />
        <h1>{{ $t('collectionTitle') }}</h1>
        <div v-for="poem in poems" :key="poem.id" :id="poem.id" class="poem">
            <h2>{{ poem.title }}</h2>
            <div v-for="line in poem.text" :key="line">{{ line }}</div>
            <p><em>{{ poem.date }}</em></p>
            <p><strong>{{ $t('tags') }}:</strong> {{ poem.tags.join(', ') }}</p>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import SidebarApp from './SidebarApp.vue';

export default {
    name: 'PoemsApp',
    components: {
        SidebarApp
    },
    setup() {
        const { t, locale } = useI18n();
        const isSidebarOpen = ref(false);

        const poems = computed(() => {
            const currentLocale = locale.value;
            switch (currentLocale) {
                case 'no':
                    return require('../i18n/poems_no.json').poems;
                case 'ru':
                    return require('../i18n/poems_ru.json').poems;
                default:
                    return require('../i18n/poems_en.json').poems;
            }
        });

        function toggleSidebar() {
            isSidebarOpen.value = !isSidebarOpen.value;
        }

        function closeSidebar() {
            isSidebarOpen.value = false;
        }

        function handlePoemSelect(poemId) {
            const element = document.getElementById(poemId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    closeSidebar();
                }, 300);
            }
        }

        const sidebarButtonText = computed(() => (isSidebarOpen.value ? 'Close Sidebar' : 'Open Sidebar'));

        return {
            t,
            poems,
            isSidebarOpen,
            toggleSidebar,
            closeSidebar,
            handlePoemSelect,
            sidebarButtonText
        };
    }
};
</script>

<style scoped>
.poem {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
}

.sidebar-toggle {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 1000;
    margin-bottom: 1rem;
}
</style>

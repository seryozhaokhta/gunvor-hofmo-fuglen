<!-- src/components/PoemsApp.vue -->

<template>
    <div>
        <button @click="openSidebar">Open Sidebar</button>
        <SidebarApp :isOpen="isSidebarOpen" :poems="poems" @close="closeSidebar" />
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

        function openSidebar() {
            isSidebarOpen.value = true;
        }

        function closeSidebar() {
            isSidebarOpen.value = false;
        }

        return {
            t,
            poems,
            isSidebarOpen,
            openSidebar,
            closeSidebar
        };
    }
};
</script>

<style scoped>
.poem {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
}

button {
    margin-bottom: 1rem;
}
</style>

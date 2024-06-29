<!-- src/components/PoemsApp.vue -->

<template>
    <div>
        <button id="sidebar-toggle" class="indicator-container" @click="toggleSidebar">
            <div class="arrow-indicator"></div>
            <span class="sidebar-tooltip">{{ sidebarButtonText }}</span>
        </button>
        <SidebarApp :isOpen="isSidebarOpen" :poems="poems" @select="handlePoemSelect" />
        <h2>{{ $t('collectionTitle') }}</h2>
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

        const sidebarButtonText = computed(() => t(isSidebarOpen.value ? 'toggleSidebarClose' : 'toggleSidebarOpen'));

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
    text-align: left;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: calc(100% * 3 / 13);
}

.indicator-container {
    width: 50px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    border: none;
    position: fixed;
    top: 0;
    left: 100px;
    z-index: 1000;
    margin-bottom: 1rem;
}

.arrow-indicator {
    position: relative;
    margin-right: 20px;
    width: 3px;
    height: 42px;
    background-color: white;
    transition: all 0.5s ease;
}

.arrow-indicator:before,
.arrow-indicator:after {
    content: "";
    position: absolute;
    width: 2px;
    height: 50%;
    background-color: rgb(0, 0, 0);
    transition: all 0.5s ease;
}

.arrow-indicator:before {
    top: 0;
    transform-origin: bottom;
}

.arrow-indicator:after {
    bottom: 0;
    transform-origin: top;
}

.indicator-container:hover .arrow-indicator {
    background-color: transparent;
}

.indicator-container:hover .arrow-indicator:before {
    transform: rotate(45deg);
}

.indicator-container:hover .arrow-indicator:after {
    transform: rotate(-45deg);
}

.indicator-container.rotate .arrow-indicator {
    transform: rotate(180deg);
}

@media (max-width: 768px) {
    .poem {
        align-items: center;
        margin-left: 0;
    }
}
</style>

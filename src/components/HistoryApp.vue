<!-- src/components/HistoryApp.vue -->

<template>
    <div class="history-app" :style="{ '--textColor': textColor }">
        <h1 class="title">{{ content.title }}</h1>
        <section class="introduction">
            <h2 class="introduction-text">{{ content.introduction.text }}</h2>
        </section>
        <section v-for="chapter in content.chapters" :key="chapter.title" class="chapter">
            <h3 class="chapter-title">{{ chapter.title }}</h3>
            <div v-for="paragraph in chapter.content" :key="paragraph" class="paragraph">
                <p>{{ paragraph }}</p>
            </div>
        </section>
        <section class="key-figures">
            <h3>Key Figures</h3>
            <div v-for="figure in content.key_figures" :key="figure.name" class="figure">
                <h4 class="figure-name">{{ figure.name }}</h4>
                <p class="figure-years">{{ figure.years }}</p>
                <p class="figure-description">{{ figure.description }}</p>
            </div>
        </section>
        <section class="themes">
            <h3>Themes</h3>
            <ul>
                <li v-for="theme in content.themes" :key="theme" class="theme">{{ theme }}</li>
            </ul>
        </section>
        <section class="historical-context">
            <h3>Historical Context</h3>
            <p class="period">{{ content.historical_context.period }}</p>
            <ul>
                <li v-for="event in content.historical_context.events" :key="event" class="event">{{ event }}</li>
            </ul>
        </section>
        <section class="legacy">
            <h3>Legacy</h3>
            <p>{{ content.legacy.literature }}</p>
        </section>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export default {
    name: 'HistoryApp',
    props: {
        textColor: {
            type: String,
            default: '#333'
        }
    },
    setup() {
        const { t, locale } = useI18n()

        const content = computed(() => {
            switch (locale.value) {
                case 'en':
                    return require('../i18n/poems_en.json').history
                case 'ru':
                    return require('../i18n/poems_ru.json').history
                case 'no':
                    return require('../i18n/poems_no.json').history
                default:
                    return require('../i18n/poems_en.json').history
            }
        })

        return {
            t,
            locale,
            content
        }
    }
}
</script>

<style scoped>
:root {
    --text-color: var(--textColor, #333);
}

.history-app {
    font-family: 'Helvetica', sans-serif;
    line-height: 1.6;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
    color: var(--text-color);
}

.title {
    font-size: 2.5em;
    margin-bottom: 0.5em;
    font-weight: bold;
    border-bottom: 2px solid var(--text-color);
    padding-bottom: 0.5em;
}

.introduction,
.chapter,
.key-figures,
.themes,
.historical-context,
.legacy {
    margin-bottom: 1.5em;
}

.introduction-text,
.chapter-title,
.figure-name {
    font-size: 1.5em;
    margin-bottom: 0.5em;
    position: relative;
    padding-left: 10px;
}

.introduction-text::before,
.chapter-title::before,
.figure-name::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 100%;
    background-color: var(--text-color);
}

.paragraph,
.figure-years,
.figure-description,
.theme,
.period,
.event {
    margin-left: 1em;
}

h1,
h2,
h3,
h4 {
    font-weight: 600;
    margin: 0.5em 0;
}

p,
ul,
li {
    margin: 0.5em 0;
}

.key-figures h4,
.themes h3,
.historical-context h3,
.legacy h3 {
    font-style: italic;
    border-left: 5px solid var(--text-color);
    padding-left: 10px;
}
</style>

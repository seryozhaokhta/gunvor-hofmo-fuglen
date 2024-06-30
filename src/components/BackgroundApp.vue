<!-- src/components/BackgroundApp.vue -->

<template>
    <div class="background">
        <svg width="0" height="0">
            <defs>
                <!-- В маске белый означает "видимый", черный - "невидимый". 
                Создаем белый круг внешней границы размытого светящегося круга, 
                а затем черный круг размером с вырезаемую часть -->
                <mask id="svgmask4">
                    <!-- <rect width="100%" height="100%" fill="black" /> -->
                    <circle cx="150" cy="150" r="600" fill="white"></circle>
                    <circle cx="300" cy="300" r="240" fill="black"></circle>
                </mask>
            </defs>
        </svg>
        <!-- Применяем маску к размытому светящемуся кругу -->
        <div class="blurred-circle" style="mask: url(#svgmask4);"></div>
    </div>
    <div class="text-content">
        <h1 class="title">{{ $t('title') }}</h1>
        <h2 class="collection-title">{{ $t('collectionTitle') }}</h2>
        <p class="author">{{ $t('author') }}</p>
        <p class="publication-date">{{ $t('publicationDate') }}</p>
        <p class="synopsis">{{ $t('synopsis') }}</p>
    </div>
</template>

<script>
export default {
    name: 'BackgroundApp',
};
</script>

<style scoped>
.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.blurred-circle {
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background-color: white;
    -webkit-filter: blur(15px);
    /* Добавили префикс -webkit- */
    filter: blur(15px);
    box-shadow: 0 0 50px rgba(255, 255, 255, 0.7);
    -webkit-mask: url(#svgmask4);
    /* Добавили префикс -webkit- */
    mask: url(#svgmask4);
}

.text-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    /* Цвет текста */
}

.title {
    font-size: 3rem;
    margin: 0.5rem 0;
    font-weight: bold;
}

.collection-title {
    font-size: 1.5rem;
    margin: 0.5rem 0;
}

.author,
.publication-date {
    font-size: 1rem;
    margin: 0.5rem 0;
}

.synopsis {
    font-size: 0.8rem;
    text-align: left;
}

@media (max-width: 768px) {
    .title {
        font-size: 1.5rem;
    }

    .collection-title {
        font-size: 1.25rem;
    }

    .author,
    .publication-date {
        font-size: 0.875rem;
    }
}
</style>

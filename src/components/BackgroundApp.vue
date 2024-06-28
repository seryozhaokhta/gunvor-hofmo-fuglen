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
                    <circle cx="150" cy="150" r="650" fill="white"></circle>
                    <circle cx="300" cy="300" r="240" fill="black"></circle>
                </mask>
            </defs>
        </svg>
        <!-- Применяем маску к размытому светящемуся кругу -->
        <div class="blurred-circle" style="mask: url(#svgmask4);"></div>
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
    filter: blur(30px);
    box-shadow: 0 0 50px rgba(255, 255, 255, 0.7);
}
</style>
<!-- src/components/GalleryApp.vue -->

<template>
    <div class="gallery-app">
        <h1>Gallery</h1>
        <div class="gallery">
            <div v-for="(image, index) in images" :key="index" class="gallery-item" @click="openLightbox(index)">
                <img :src="image.src" :alt="image.alt" />
            </div>
        </div>
        <div v-if="isLightboxOpen" class="lightbox" @click="closeLightbox">
            <img :src="images[currentImageIndex].src" :alt="images[currentImageIndex].alt" />
            <button class="close-button" @click="closeLightbox">Close</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'GalleryApp',
    setup() {
        const images = ref([
            { src: require('../assets/images/Gunvor-Hofmo--1.jpg'), alt: 'Image 1' },
            { src: require('../assets/images/Ruth Maier og Gunvor Hofmo--1.png'), alt: 'Image 2' },
            { src: require('../assets/images/Gunvor-Hofmo--3.jpg'), alt: 'Image 3' },
        ]);

        const isLightboxOpen = ref(false);
        const currentImageIndex = ref(0);

        const openLightbox = (index) => {
            currentImageIndex.value = index;
            isLightboxOpen.value = true;
        };

        const closeLightbox = () => {
            isLightboxOpen.value = false;
        };

        return {
            images,
            isLightboxOpen,
            currentImageIndex,
            openLightbox,
            closeLightbox
        };
    }
};
</script>

<style scoped>
.gallery-app {
    text-align: center;
    padding: 2rem;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
}

.gallery-item {
    width: 300px;
    height: 420px;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid #ccc;
    transition: transform 0.3s ease-in-out;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
    aspect-ratio: 1;
}

.gallery-item:hover {
    transform: scale(1.05);
}

.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.lightbox img {
    max-width: 90%;
    max-height: 90%;
    border: 2px solid #fff;
}

.close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
}
</style>

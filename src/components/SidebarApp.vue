<!-- src/components/Sidebar.vue -->
 
<template>
    <div class="sidebar" :class="{ open: isOpen }">
        <button @click="closeSidebar">Close</button>
        <ul>
            <li v-for="poem in poems" :key="poem.id" @click="scrollToPoem(poem.id)">
                {{ poem.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SidebarApp',
    props: {
        isOpen: {
            type: Boolean,
            required: true
        },
        poems: {
            type: Array,
            required: true
        }
    },
    methods: {
        closeSidebar() {
            this.$emit('close');
        },
        scrollToPoem(poemId) {
            const element = document.getElementById(poemId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>

<style scoped>
.sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 300px;
    background-color: #fff;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    overflow-y: auto;
    padding: 1rem;
}

.sidebar.open {
    transform: translateX(0);
}

button {
    display: block;
    margin-bottom: 1rem;
}
</style>


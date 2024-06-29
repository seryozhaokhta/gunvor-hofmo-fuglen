<!-- src/components/SidebarApp.vue -->

<template>
    <div class="sidebar" :class="{ open: isOpen }">
        <ul>
            <li v-for="poem in poems" :key="poem.id" @click="selectPoem(poem.id)">
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
        selectPoem(poemId) {
            this.$emit('select', poemId);
        }
    }
};
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

ul {
    list-style: none;
    padding: 0;
}

li {
    cursor: pointer;
    padding: 0.5rem 0;
    text-align: left;
}

li:hover {
    background-color: #f0f0f0;
}

button {
    display: block;
    margin-bottom: 1rem;
}
</style>

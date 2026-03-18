<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(true)

onMounted(() => {
    const saved = localStorage.getItem('theme')

    if (saved) {
        isDark.value = saved === 'dark'
    }

    applyTheme()
})

const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    applyTheme()
}

const applyTheme = () => {
    document.body.classList.toggle('light', !isDark.value)
}
</script>

<template>
    <button class="theme-btn" @click="toggleTheme">
        {{ isDark ? '☀️' : '🌙' }}
    </button>
</template>
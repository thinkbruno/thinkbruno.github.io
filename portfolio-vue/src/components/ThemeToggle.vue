<script setup>
import { ref, onMounted } from 'vue'
import { toggleTheme } from '@/utils/theme'

const isDark = ref(true)

onMounted(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    isDark.value = saved === 'dark'
})

const handleToggle = () => {
    toggleTheme()
    isDark.value = !isDark.value
}
</script>

<template>
    <button class="theme-btn" @click="handleToggle">
        {{ isDark ? '☀️' : '🌙' }}
    </button>
</template>
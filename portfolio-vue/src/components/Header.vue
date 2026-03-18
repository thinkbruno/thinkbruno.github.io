<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { languageStore } from '@/store/language'
import LanguageSwitcher from './LanguageSwitcher.vue'
import ThemeToggle from './ThemeToggle.vue'

const isOpen = ref(false)

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}

const handleResize = () => {
    if (window.innerWidth > 768) {
        isOpen.value = false
    }
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
})
</script>

<template>
    <header class="header">
        <div class="container header-content">

            <h1 class="logo">Bruno Ramos</h1>

            <nav class="nav desktop-only">
                <a href="#about">{{ languageStore.t('about') }}</a>
                <a href="#services">{{ languageStore.t('services') }}</a>
                <a href="#projects">{{ languageStore.t('projects') }}</a>

                <a href="/budget">
                    {{ languageStore.t('budget') }}
                </a>

                <LanguageSwitcher />
                <ThemeToggle />
            </nav>

            <button class="menu-btn mobile-only" @click="toggleMenu">
                ☰
            </button>
        </div>

        <div v-if="isOpen" class="mobile-menu">
            <a href="#about">{{ languageStore.t('about') }}</a>
            <a href="#services">{{ languageStore.t('services') }}</a>
            <a href="#projects">{{ languageStore.t('projects') }}</a>
            <a href="/budget">{{ languageStore.t('budget') }}</a>

            <div class="mobile-actions">
                <LanguageSwitcher mobile />
                <ThemeToggle />
            </div>
        </div>

    </header>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import ThemeToggle from './ThemeToggle.vue'

const isOpen = ref(false)

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}

//  fecha menu ao trocar para desktop
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

            <!-- DESKTOP -->
            <nav class="nav desktop-only">
                <a href="#about">Sobre</a>
                <a href="#services">Serviços</a>
                <a href="#projects">Projetos</a>
                <a href="/budget" class="btn small">Orçamento</a>

                <LanguageSwitcher />
                <ThemeToggle />
            </nav>

            <!-- BOTÃO MOBILE -->
            <button class="menu-btn mobile-only" @click="toggleMenu">
                ☰
            </button>
        </div>

        <!-- MENU MOBILE -->
        <div v-if="isOpen" class="mobile-menu">
            <a href="#about" @click="toggleMenu">Sobre</a>
            <a href="#services" @click="toggleMenu">Serviços</a>
            <a href="#projects" @click="toggleMenu">Projetos</a>
            <a href="/budget" @click="toggleMenu">Orçamento</a>

            <div class="mobile-actions">
                <LanguageSwitcher mobile />
                <ThemeToggle />
            </div>
        </div>

    </header>
</template>
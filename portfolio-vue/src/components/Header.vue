<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'
import { languageStore } from '@/store/language'
import LanguageSwitcher from './LanguageSwitcher.vue'
import ThemeToggle from './ThemeToggle.vue'

const isOpen = ref(false)
const activeSection = ref('')
const route = useRoute()

const sections = ['about', 'services', 'projects']

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}

const closeMenu = () => {
    isOpen.value = false
}

const handleResize = () => {
    if (window.innerWidth > 768) {
        isOpen.value = false
    }
}

// 🔥 Detecta seção ativa (só na home)
const onScroll = () => {
    if (route.path !== '/') return

    const scrollPosition = window.scrollY + 120

    for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
            const offsetTop = el.offsetTop
            const height = el.offsetHeight

            if (
                scrollPosition >= offsetTop &&
                scrollPosition < offsetTop + height
            ) {
                activeSection.value = section
            }
        }
    }
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', onScroll)

    setTimeout(() => {
        onScroll()
    }, 100)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('scroll', onScroll)
})

watch(
    () => languageStore.current,
    () => {
        setTimeout(() => {
            onScroll()
        }, 100)
    }
)
</script>

<template>
    <header class="header">
        <div class="container header-content">

            <!-- LOGO -->
            <router-link to="/" class="logo">
                Bruno Ramos
            </router-link>

            <!-- DESKTOP -->
            <nav class="nav desktop-only">

                <router-link to="/#about" :class="{ active: activeSection === 'about' }">
                    {{ languageStore.t('about') }}
                </router-link>

                <router-link to="/#services" :class="{ active: activeSection === 'services' }">
                    {{ languageStore.t('services') }}
                </router-link>

                <router-link to="/#projects" :class="{ active: activeSection === 'projects' }">
                    {{ languageStore.t('projects') }}
                </router-link>

                <router-link to="/budget">
                    {{ languageStore.t('budget') }}
                </router-link>

                <LanguageSwitcher />
                <ThemeToggle />
            </nav>

            <!-- MOBILE BUTTON -->
            <button class="menu-btn mobile-only" @click="toggleMenu">
                ☰
            </button>
        </div>

        <!-- MOBILE MENU -->
        <div v-if="isOpen" class="mobile-menu">

            <router-link to="/#about" @click="closeMenu">
                {{ languageStore.t('about') }}
            </router-link>

            <router-link to="/#services" @click="closeMenu">
                {{ languageStore.t('services') }}
            </router-link>

            <router-link to="/#projects" @click="closeMenu">
                {{ languageStore.t('projects') }}
            </router-link>

            <router-link to="/budget" @click="closeMenu">
                {{ languageStore.t('budget') }}
            </router-link>

            <div class="mobile-actions">
                <LanguageSwitcher mobile />
                <ThemeToggle />
            </div>
        </div>

    </header>
</template>
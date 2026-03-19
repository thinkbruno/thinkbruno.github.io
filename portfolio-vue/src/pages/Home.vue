<script setup>
import HeroSection from '@/sections/HeroSection.vue'
import AboutSection from '@/sections/AboutSection.vue'
import ServicesSection from '@/sections/ServicesSection.vue'
import ProjectsSection from '@/sections/ProjectsSection.vue'

import { computed, onMounted, watch } from 'vue'
import { languageStore } from '@/store/language'

const $languageKey = computed(() => languageStore.current)

// função centralizada de animação
const initAnimations = () => {
    const sections = document.querySelectorAll('section')

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
            })
        },
        {
            threshold: 0.2
        }
    )

    sections.forEach(section => {
        section.classList.remove('visible') // reset ao recriar DOM
        observer.observe(section)
    })
}

// primeira carga
onMounted(() => {
    setTimeout(() => {
        initAnimations()
    }, 100)
})

// quando trocar idioma (precisa de timeout pra esperar o DOM atualizar)
watch($languageKey, () => {
    setTimeout(() => {
        initAnimations()
    }, 100)
})
</script>

<template>
    <transition name="fade" mode="out-in">
        <div :key="$languageKey">
            <section id="hero">
                <HeroSection />
            </section>

            <section id="about">
                <AboutSection />
            </section>

            <section id="services">
                <ServicesSection />
            </section>

            <section id="projects">
                <ProjectsSection />
            </section>
        </div>
    </transition>
</template>
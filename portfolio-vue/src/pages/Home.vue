<script setup>
import HeroSection from '@/sections/HeroSection.vue'
import AboutSection from '@/sections/AboutSection.vue'
import ServicesSection from '@/sections/ServicesSection.vue'
import ProjectsSection from '@/sections/ProjectsSection.vue'

import { computed } from 'vue'
import { languageStore } from '@/store/language'

const $languageKey = computed(() => languageStore.current)
</script>

<template>
    <transition name="fade" mode="out-in">
        <div :key="$languageKey">
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
        </div>
    </transition>
</template>
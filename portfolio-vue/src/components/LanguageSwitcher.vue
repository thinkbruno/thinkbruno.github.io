<script setup>
import { ref, onMounted } from 'vue'
import { languageStore } from '@/store/language'

const isOpen = ref(false)

const languages = [
    { code: 'pt', label: 'PT', flag: '/flags/br.svg' },
    { code: 'en', label: 'EN', flag: '/flags/us.svg' },
    { code: 'es', label: 'ES', flag: '/flags/es.svg' }
]

onMounted(() => {
    const saved = localStorage.getItem('lang')
    if (saved) languageStore.set(saved)
})

const selectLang = (lang) => {
    languageStore.set(lang)
    isOpen.value = false
}
</script>

<template>
    <div class="lang-switcher">

        <!-- BOTÃO -->
        <button class="lang-btn" @click="isOpen = !isOpen">
            <img :src="languages.find(l => l.code === languageStore.current).flag" class="flag" />
            <span>{{ languageStore.current.toUpperCase() }}</span>
        </button>

        <!-- DROPDOWN -->
        <div v-if="isOpen" class="lang-dropdown">
            <div v-for="lang in languages" :key="lang.code" class="lang-option"
                :class="{ active: languageStore.current === lang.code }" @click="selectLang(lang.code)">
                <img :src="lang.flag" class="flag" />
                <span>{{ lang.label }}</span>
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue'

const props = defineProps({
    mobile: {
        type: Boolean,
        default: false
    }
})

const currentLang = ref('pt')
const isOpen = ref(false)

const languages = [
    { code: 'pt', label: 'Português', flag: '/flags/br.svg' },
    { code: 'en', label: 'English', flag: '/flags/us.svg' },
    { code: 'es', label: 'Español', flag: '/flags/es.svg' }
]

onMounted(() => {
    const saved = localStorage.getItem('lang')
    if (saved) currentLang.value = saved

    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})

const selectLang = (lang) => {
    currentLang.value = lang
    localStorage.setItem('lang', lang)
    isOpen.value = false
}

const handleClickOutside = (e) => {
    if (!e.target.closest('.lang-switcher')) {
        isOpen.value = false
    }
}
</script>

<template>
    <div class="lang-switcher">

        <!-- 🔥 MOBILE -->
        <div v-if="mobile" class="lang-mobile">
            <div v-for="lang in languages" :key="lang.code" class="lang-option"
                :class="{ active: currentLang === lang.code }" @click="selectLang(lang.code)">
                <img :src="lang.flag" class="flag" />
                <span>{{ lang.label }}</span>
            </div>
        </div>

        <!-- 💻 DESKTOP -->
        <template v-else>

            <button class="lang-btn" @click.stop="isOpen = !isOpen">
                <img :src="languages.find(l => l.code === currentLang).flag" class="flag" />
                <span>{{ currentLang.toUpperCase() }}</span>
            </button>

            <div v-if="isOpen" class="lang-dropdown">
                <div v-for="lang in languages" :key="lang.code" class="lang-option"
                    :class="{ active: currentLang === lang.code }" @click="selectLang(lang.code)">
                    <img :src="lang.flag" class="flag" />
                    <span>{{ lang.label }}</span>
                </div>
            </div>

        </template>

    </div>
</template>
<script setup>
import { computed } from 'vue'
import { languageStore } from '@/store/language'
import { getCvLink } from '@/utils/cv'
import { Github, Linkedin, Instagram, FileText } from 'lucide-vue-next'
const cvLink = computed(() => getCvLink(languageStore.current))
</script>
<template>
    <section class="hero" id="home">
        <div class="container hero-content">

            <div class="hero-image">
                <img src="/profile.jpg" />
            </div>

            <div class="hero-info">
                <h1>Bruno Ramos</h1>
                <p>{{ languageStore.t('hero_subtitle') }}</p>
                <br>
                <div class="hero-buttons">
                    <a :href="cvLink" target="_blank" class="btn-outline">
                        <FileText size="18" /> {{ languageStore.t('curriculum') }}
                    </a>
                    <!-- GitHub -->
                    <a href="https://github.com/thinkbruno" target="_blank" class="btn-outline">
                        <Github size="18" />
                        GitHub
                    </a>

                    <!-- LinkedIn -->
                    <a href="https://www.linkedin.com/in/ramosbruno90/" target="_blank" class="btn-outline">
                        <Linkedin size="18" />
                        Linkedin
                    </a>

                    <!-- Instagram -->
                    <a href="https://www.instagram.com/brunoramos.tech" target="_blank" class="btn-outline">
                        <Instagram size="18" />
                        Instagram
                    </a>
                </div>
            </div>

        </div>
    </section>
</template>
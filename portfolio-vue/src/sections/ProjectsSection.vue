<script setup>
import { ref, onMounted } from 'vue'
import { languageStore } from '@/store/language'
import { Github } from 'lucide-vue-next'
const repos = ref([])
const loading = ref(true)

const username = 'thinkbruno'

onMounted(async () => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`)
        const data = await response.json()

        repos.value = data
            //  remove forks
            .filter(repo => !repo.fork)

            //  remove repos com #ignore
            .filter(repo => !repo.description?.toLowerCase().includes('#ignore'))

            //  ordena por mais recente
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))

    } catch (error) {
        console.error('Erro ao buscar repos:', error)
    } finally {
        loading.value = false
    }
})
</script>

<template>
    <section class="projects" id="projects">
        <div class="container">

            <h2>{{ languageStore.t('projects_title') }}</h2>
            <br>
            <p class="subtitle">
                {{ languageStore.t('projects_subtitle') }}
            </p>
            <br>
            <!-- LOADING -->
            <div v-if="loading">
                <p>Carregando...</p>
            </div>

            <!-- LISTA -->
            <div v-else class="projects-grid">

                <div v-for="repo in repos" :key="repo.id" class="project-card">
                    <h3>{{ repo.name }}</h3>

                    <p>
                        {{ repo.description || 'Sem descrição' }}
                    </p>
                    <p><span>{{ repo.language || "MySQL" }}</span></p>
                    <div class="project-actions">
                        <a :href="repo.html_url" target="_blank" class="btn-outline">
                            <Github size="18" />
                            {{ languageStore.t('github') }}
                        </a>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>
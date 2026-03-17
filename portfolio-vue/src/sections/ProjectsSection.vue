<script setup>
import { ref, onMounted } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'

const projects = ref([])

const username = 'SEU_USERNAME_AQUI' // 🔥 troca isso

onMounted(async () => {
    try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`)
        const data = await res.json()

        // filtra e ordena
        projects.value = data
            .filter(repo => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)

    } catch (err) {
        console.error(err)
    }
})
</script>

<template>
    <section class="projects" id="projects">
        <div class="container">

            <h2 class="section-title">Projetos</h2>

            <p class="section-subtitle">
                Alguns trabalhos e estudos desenvolvidos por mim
            </p>

            <div class="projects-grid">
                <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
            </div>

        </div>
    </section>
</template>
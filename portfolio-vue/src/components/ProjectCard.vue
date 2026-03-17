<template>
    <div class="card project-card">

        <h3>{{ project.name }}</h3>

        <p class="project-desc">
            {{ project.description || 'Sem descrição disponível' }}
        </p>

        <div class="project-footer">
            <span class="project-lang">
                {{ project.language }}
            </span>

            <a :href="project.html_url" target="_blank" class="btn small">
                Ver projeto
            </a>
        </div>

    </div>
</template>

<script setup>
defineProps({
    project: Object
})
</script>
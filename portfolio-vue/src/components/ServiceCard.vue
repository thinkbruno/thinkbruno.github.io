<template>
    <div class="card service-card">
        <h3>{{ icon }} {{ title }}</h3>
        <p>{{ description }}</p>
    </div>
</template>

<script setup>
defineProps({
    icon: String,
    title: String,
    description: String
})
</script>
<script setup>
import ServiceCard from '@/components/ServiceCard.vue'
import { languageStore } from '@/store/language'

const services = [
    {
        id: 'dev',
        icon: '💻',
        title: 'service_dev_title',
        description: 'service_dev_desc'
    },
    {
        id: 'linux',
        icon: '🐧',
        title: 'service_linux_title',
        description: 'service_linux_desc'
    },
    {
        id: 'pc',
        icon: '🖥️',
        title: 'service_pc_title',
        description: 'service_pc_desc'
    },
    {
        id: 'network',
        icon: '🌐',
        title: 'service_network_title',
        description: 'service_network_desc'
    }
]
</script>

<template>
    <section class="services" id="services">
        <div class="container">

            <h2>{{ languageStore.t('services_title') }}</h2>
            <br>

            <p>
                {{ languageStore.t('services_subtitle') }}
            </p>

            <br>

            <div class="services-grid">
                <ServiceCard v-for="service in services" :key="service.id" :icon="service.icon"
                    :title="languageStore.t(service.title)" :description="languageStore.t(service.description)" />
            </div>

        </div>
    </section>
</template>
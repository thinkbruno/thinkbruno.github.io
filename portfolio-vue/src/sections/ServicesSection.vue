<script setup>
import ServiceCard from '@/components/ServiceCard.vue'

const services = [
    {
        icon: '💻',
        title: 'Desenvolvimento de sistemas',
        description: 'Criação de sistemas web personalizados para atender necessidades específicas.'
    },
    {
        icon: '🌐',
        title: 'Sites institucionais',
        description: 'Sites modernos, rápidos e responsivos.'
    },
    {
        icon: '⚙️',
        title: 'Automação',
        description: 'Automatização de processos e tarefas.'
    },
    {
        icon: '🛠️',
        title: 'Suporte técnico',
        description: 'Manutenção e suporte em TI.'
    }
]
</script>

<template>
    <section class="services" id="services">
        <div class="container">

            <h2 class="section-title">Como posso te ajudar</h2>

            <p class="section-subtitle">
                Soluções práticas para problemas reais do seu negócio
            </p>

            <div class="services-grid">
                <ServiceCard v-for="(service, index) in services" :key="index" :icon="service.icon"
                    :title="service.title" :description="service.description" />
            </div>

        </div>
    </section>
</template>
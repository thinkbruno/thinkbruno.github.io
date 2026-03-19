<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function goToBudget() {
    router.push('/budget')
}
</script>

<template>
    <div v-if="route.path !== '/budget'" class="whatsapp-float" @click="goToBudget">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" class="whatsapp-icon" />
    </div>
</template>
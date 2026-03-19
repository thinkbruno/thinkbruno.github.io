<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <div class="app">
        <Header />

        <main>
            <Suspense>
                <template #default>
                    <router-view />
                </template>

                <template #fallback>
                    <div class="loading">Carregando...</div>
                </template>
            </Suspense>
        </main>

        <Footer />
    </div>
</template>
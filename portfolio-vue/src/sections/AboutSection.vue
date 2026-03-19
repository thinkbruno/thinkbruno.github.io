<script setup>
import { languageStore } from '@/store/language'
</script>

<template>
    <section class="about" id="about">
        <div class="container">

            <h1>{{ languageStore.t('about_title') }}</h1>
            <br>
            <p>
                {{ languageStore.t('about_text') }}
            </p>
            <br>
        </div>
    </section>
</template>
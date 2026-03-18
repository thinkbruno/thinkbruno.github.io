<script setup>
import { languageStore } from '@/store/language'
</script>

<template>
    <section class="about" id="about">
        <div class="container">

            <h2>{{ languageStore.t('about_title') }}</h2>
            <br>
            <p>
                {{ languageStore.t('about_text') }}
            </p>
            <br>
        </div>
    </section>
</template>
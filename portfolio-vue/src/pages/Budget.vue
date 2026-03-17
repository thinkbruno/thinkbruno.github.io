<script setup>
import { ref } from "vue";
import { sendToWhatsApp } from "../utils/whatsapp";

const name = ref("");
const project = ref("");
const description = ref("");
const deadline = ref("");

function submit() {
    sendToWhatsApp({
        name: name.value,
        project: project.value,
        description: description.value,
        deadline: deadline.value
    });
}
</script>

<template>
    <section class="budget">
        <h1>Solicitar orçamento</h1>

        <input v-model="name" placeholder="Nome" />
        <input v-model="project" placeholder="Projeto" />
        <textarea v-model="description" />
        <input v-model="deadline" placeholder="Prazo" />

        <button @click="submit">Enviar via WhatsApp</button>

        <a href="mailto:seu@email.com">Ou enviar por email</a>
    </section>
</template>
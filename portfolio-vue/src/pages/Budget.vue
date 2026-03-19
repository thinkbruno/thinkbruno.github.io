<script setup>
import { ref, computed } from "vue";
import { sendToWhatsApp } from "../utils/whatsapp";
import { languageStore } from "../store/language";

import "../assets/css/components/budget.css";

const name = ref("");
const project = ref("");
const description = ref("");
const deadline = ref("");

// Mensagem dinâmica (preview + envio)
const message = computed(() => {
    return `${languageStore.t("budget_msg_intro")}

${languageStore.t("budget_name")}: ${name.value || "-"}
${languageStore.t("budget_project")}: ${project.value ? languageStore.t(`budget_project_${project.value}`) : "-"}
${languageStore.t("budget_deadline")}: ${deadline.value || "-"}

${languageStore.t("budget_description")}:
${description.value || "-"}`;
});

function submit() {
    if (!name.value || !project.value) {
        alert(languageStore.t("budget_error"));
        return;
    }

    sendToWhatsApp({
        name: name.value,
        project: languageStore.t(`budget_project_${project.value}`),
        description: message.value,
        deadline: deadline.value
    });
}
</script>

<template>
    <section class="budget">
        <div class="budget-container">

            <transition name="fade" mode="out-in">
                <div :key="languageStore.current">

                    <h1>{{ languageStore.t("budget_title") }}</h1>
                    <br>

                    <p class="budget-subtitle">
                        {{ languageStore.t("budget_subtitle") }}
                    </p>

                    <ul class="budget-benefits">
                        <li>✔ {{ languageStore.t("budget_benefit_1") }}</li>
                        <li>✔ {{ languageStore.t("budget_benefit_2") }}</li>
                        <li>✔ {{ languageStore.t("budget_benefit_3") }}</li>
                    </ul>

                    <div class="budget-form">

                        <input v-model="name" :placeholder="languageStore.t('budget_name')" />

                        <select v-model="project" class="budget-select">
                            <option value="" disabled selected hidden>
                                {{ languageStore.t("budget_project") }}
                            </option>
                            <option value="landing">
                                {{ languageStore.t("budget_project_landing") }}
                            </option>
                            <option value="institutional">
                                {{ languageStore.t("budget_project_institutional") }}
                            </option>
                            <option value="system">
                                {{ languageStore.t("budget_project_system") }}
                            </option>
                        </select>

                        <textarea v-model="description" :placeholder="languageStore.t('budget_description')"></textarea>

                        <input v-model="deadline" :placeholder="languageStore.t('budget_deadline')" />

                        <button @click="submit">
                            {{ languageStore.t("budget_button") }}
                        </button>

                        <span class="budget-divider">
                            {{ languageStore.t("budget_or") }}
                        </span>

                        <a href="mailto:seu@email.com" class="budget-email">
                            {{ languageStore.t("budget_email") }}
                        </a>

                        <!-- PREVIEW DINÂMICO -->
                        <pre class="budget-preview">
{{ message }}
                    </pre>

                    </div>

                </div>
            </transition>

        </div>
    </section>
</template>
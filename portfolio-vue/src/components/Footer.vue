<template>
    <footer class="footer">
        <div class="container footer-content">

            <p>© {{ year }} Bruno Ramos</p>

            <div class="footer-links">
                <a href="https://github.com/SEU_USERNAME" target="_blank">GitHub</a>
                <a href="https://linkedin.com/in/SEU_LINKEDIN" target="_blank">LinkedIn</a>
                <a href="mailto:seu@email.com">Email</a>
            </div>

        </div>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
<script setup>
import { Github, Linkedin, Instagram, Mail } from 'lucide-vue-next'
const year = new Date().getFullYear()
</script>
<template>
    <footer class="footer">
        <div class="container footer-content">

            <p>© {{ year }} Bruno Ramos</p>

            <div class="social-icons">

                <a href="https://github.com/thinkbruno" target="_blank">
                    <Github size="20" />
                </a>

                <a href="https://www.linkedin.com/in/ramosbruno90/" target="_blank">
                    <Linkedin size="20" />
                </a>

                <a href="https://www.instagram.com/brunoramos.tech" target="_blank">
                    <Instagram size="20" />
                </a>

                <a href="mailto:brunoramos90@gmail.com" title="Email">
                    <Mail size="20" />
                </a>

            </div>

        </div>
    </footer>
</template>

/* =========================
INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {

    initComponents()
    initTheme()
    initMobileMenu()
    initProjectSearch()
    initPlaceholders()
    initLazyProjects()
    updateCVLink()

})

/* =========================
LOAD COMPONENTS
========================= */

async function loadComponent(id, file) {

    const element = document.getElementById(id)

    if (!element) return

    try {

        const response = await fetch(file)
        const html = await response.text()

        element.innerHTML = html

        if (id === "header") {
            updateThemeIcon()
        }

        if (id === "footer") {
            updateYear()
        }

        if (file.includes("whatsapp")) {
            updateWhatsAppLinks()
            initWhatsAppPopup()
        }

    } catch (err) {

        console.warn("Component load failed:", file)

    }

}

function initComponents() {

    loadComponent("header", "components/header.html")
    loadComponent("footer", "components/footer.html")
    loadComponent("whatsapp-container", "components/whatsapp.html")

}

/* =========================
THEME
========================= */

function initTheme() {

    const savedTheme = localStorage.getItem("theme")

    if (savedTheme) {

        document.documentElement.setAttribute(
            "data-theme",
            savedTheme
        )

    }

    updateThemeIcon()

    document.addEventListener("click", (e) => {

        if (e.target.id !== "theme-toggle") return

        const current =
            document.documentElement.getAttribute("data-theme")

        const newTheme =
            current === "dark" ? "light" : "dark"

        document.documentElement.setAttribute(
            "data-theme",
            newTheme
        )

        localStorage.setItem("theme", newTheme)

        updateThemeIcon()

    })

}

function updateThemeIcon() {

    const toggle = document.getElementById("theme-toggle")

    if (!toggle) return

    const theme =
        document.documentElement.getAttribute("data-theme")

    toggle.textContent = theme === "dark" ? "☀️" : "🌙"

}

/* =========================
MOBILE MENU
========================= */

function initMobileMenu() {

    document.addEventListener("click", (e) => {

        if (e.target.id !== "menu-toggle") return

        const menu = document.getElementById("mobile-menu")

        if (menu) menu.classList.toggle("active")

    })

}

/* =========================
PROJECT SEARCH
========================= */

function initProjectSearch() {

    const searchInput =
        document.getElementById("project-search")

    if (!searchInput) return

    searchInput.addEventListener("input", function () {

        const query = this.value.toLowerCase()

        const projects =
            document.querySelectorAll(".project-card")

        projects.forEach(card => {

            const text = card.innerText.toLowerCase()

            card.style.display =
                text.includes(query) ? "" : "none"

        })

    })

}

/* =========================
I18N PLACEHOLDERS
========================= */

function initPlaceholders() {

    if (typeof translations === "undefined") return

    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(element => {

            const key =
                element.getAttribute("data-i18n-placeholder")

            if (translations[key]) {

                element.placeholder = translations[key]

            }

        })

}

/* =========================
WHATSAPP POPUP
========================= */

function initWhatsAppPopup() {

    const popup = document.getElementById("whatsappPopup")
    const closePopup = document.getElementById("closePopup")

    if (!popup || !closePopup) return

    setTimeout(() => {

        popup.classList.add("show")

    }, 6000)

    closePopup.addEventListener("click", () => {

        popup.classList.remove("show")

    })

}

/* =========================
LAZY PROJECTS
========================= */

function initLazyProjects() {

    const cards = document.querySelectorAll(".project-card")

    if (!("IntersectionObserver" in window)) return

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible")
                observer.unobserve(entry.target)

            }

        })

    }, { threshold: 0.1 })

    cards.forEach(card => {

        card.classList.add("lazy-project")
        observer.observe(card)

    })

}

/* =========================
WHATSAPP MESSAGE
========================= */

const whatsappMessages = {

    pt: "Olá Bruno, vi seu portfólio e gostaria de solicitar um orçamento.",
    en: "Hello Bruno, I saw your portfolio and would like to request a quote.",
    es: "Hola Bruno, vi tu portafolio y me gustaría solicitar un presupuesto."

}

function updateWhatsAppLinks() {

    const lang = document.documentElement.lang || "pt"

    const message =
        whatsappMessages[lang] || whatsappMessages.pt

    const encoded = encodeURIComponent(message)

    const url =
        `https://wa.me/5513988542002?text=${encoded}`

    document
        .querySelectorAll(".whatsapp-link")
        .forEach(link => {

            link.href = url
            link.setAttribute("rel", "noopener noreferrer")

        })

}

/* =========================
FOOTER YEAR
========================= */

function updateYear() {

    const year = document.getElementById("year")

    if (!year) return

    const startYear = 2008
    const currentYear = new Date().getFullYear()

    year.textContent =
        currentYear > startYear
            ? `${startYear}–${currentYear}`
            : currentYear

}

function updateCVLink() {

    const button = document.getElementById("cv-download")

    if (!button) return

    const lang = document.documentElement.lang || "pt"

    const files = {

        pt: "cv/bruno_ramos_pt.pdf",
        en: "cv/bruno_ramos_en.pdf",
        es: "cv/bruno_ramos_es.pdf"

    }

    button.href = files[lang] || files.pt

}
/* =========================
   I18N SYSTEM
========================= */

const translationsCache = {}
let currentLanguage = null


/* =========================
   LOAD LANGUAGE
========================= */

async function loadLanguage(lang) {

    // evita recarregar idioma atual
    if (lang === currentLanguage) return

    try {

        /* carregar idioma (cache) */

        if (!translationsCache[lang]) {

            const response = await fetch(`lang/${lang}.json`)

            if (!response.ok) {
                console.error("Language file not found:", lang)
                return
            }

            const translations = await response.json()

            translationsCache[lang] = translations

        }

        const translations = translationsCache[lang]

        /* aplicar traduções */

        document.querySelectorAll("[data-i18n]").forEach(element => {

            const key = element.getAttribute("data-i18n")

            if (translations[key]) {

                element.style.opacity = 0

                setTimeout(() => {

                    element.innerText = translations[key]

                    element.style.opacity = 1

                }, 100)

            }

        })

        /* atualizar idioma atual */

        currentLanguage = lang

        document.documentElement.lang = lang

        localStorage.setItem("preferredLanguage", lang)

        /* destacar idioma ativo */

        document.querySelectorAll(".lang-btn").forEach(btn => {

            btn.classList.remove("active")

            if (btn.dataset.lang === lang) {

                btn.classList.add("active")

            }

        })

    } catch (error) {

        console.error("Error loading language:", error)

    }

}


/* =========================
   SET LANGUAGE (WITH FADE)
========================= */

function setLanguage(lang) {

    if (lang === currentLanguage) return

    document.body.classList.add("lang-changing")

    setTimeout(async () => {

        await loadLanguage(lang)

        document.body.classList.remove("lang-changing")

    }, 250)

}


/* =========================
   INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const savedLang =
        localStorage.getItem("preferredLanguage") || "pt"

    loadLanguage(savedLang)

})
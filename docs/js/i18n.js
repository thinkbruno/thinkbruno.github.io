

const translationsCache = {}
let currentLanguage = null




async function loadLanguage(lang) {

    if (lang === currentLanguage) return

    try {

        if (!translationsCache[lang]) {

            const response = await fetch(`lang/${lang}.json`)

            if (!response.ok) {
                console.error("Language file not found:", lang)
                return
            }

            const data = await response.json()

            translationsCache[lang] = data

        }

        const translations = translationsCache[lang]


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


        document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

            const key = element.getAttribute("data-i18n-placeholder")

            if (translations[key]) {

                element.placeholder = translations[key]

            }

        })


        currentLanguage = lang

        document.documentElement.lang = lang

        localStorage.setItem("preferredLanguage", lang)


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




function setLanguage(lang) {

    if (lang === currentLanguage) return

    document.body.classList.add("lang-changing")

    setTimeout(async () => {

        await loadLanguage(lang)

        document.body.classList.remove("lang-changing")

    }, 250)

}



document.addEventListener("DOMContentLoaded", () => {

    const savedLang =
        localStorage.getItem("preferredLanguage") || "pt"

    loadLanguage(savedLang)

})

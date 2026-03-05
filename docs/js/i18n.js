const translationsCache = {};
let currentLanguage = null;

async function loadLanguage(lang) {

    // evita recarregar idioma já ativo
    if (lang === currentLanguage) return;

    // verifica se já foi carregado (cache)
    if (!translationsCache[lang]) {
        const response = await fetch(`lang/${lang}.json`);
        const translations = await response.json();

        translationsCache[lang] = translations;
    }

    const translations = translationsCache[lang];

    // aplica traduções
    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.getAttribute("data-i18n");

        if (translations[key]) {
            element.style.opacity = 0;

            setTimeout(() => {
                element.innerText = translations[key];
                element.style.opacity = 1;
            }, 100);
        }

    });

    currentLanguage = lang;

    document.documentElement.lang = lang;

    localStorage.setItem("preferredLanguage", lang);

}

function setLanguage(lang) {
    loadLanguage(lang);
}

document.addEventListener("DOMContentLoaded", () => {

    const savedLang = localStorage.getItem("preferredLanguage") || "pt";

    loadLanguage(savedLang);

});
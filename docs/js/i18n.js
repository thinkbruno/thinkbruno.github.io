async function setLanguage(lang) {

    const response = await fetch(`lang/${lang}.json`);
    const translations = await response.json();

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.getAttribute("data-i18n");

        if (translations[key]) {
            element.innerText = translations[key];
        }

    });

    localStorage.setItem("preferredLanguage", lang);
}

document.addEventListener("DOMContentLoaded", () => {

    const savedLang = localStorage.getItem("preferredLanguage") || "pt";

    setLanguage(savedLang);

});
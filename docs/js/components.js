/* =========================
LOAD COMPONENTS
========================= */

async function loadComponent(id, file) {

    const response = await fetch(file)
    const html = await response.text()

    document.getElementById(id).innerHTML = html

    if (id === "header") {
        updateThemeIcon()
    }

}

loadComponent("header", "components/header.html")
loadComponent("footer", "components/footer.html")

/* =========================
THEME
========================= */

document.addEventListener("click", (e) => {

    if (e.target.id === "theme-toggle") {

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

    }

})

/* LOAD SAVED THEME */

const savedTheme = localStorage.getItem("theme")

if (savedTheme) {

    document.documentElement.setAttribute(
        "data-theme",
        savedTheme
    )

}

updateThemeIcon()

function updateThemeIcon() {

    const toggle = document.getElementById("theme-toggle")

    if (!toggle) return

    const theme =
        document.documentElement.getAttribute("data-theme")

    if (theme === "dark") {
        toggle.textContent = "☀️"
    } else {
        toggle.textContent = "🌙"
    }

}

/* =========================
MOBILE MENU
========================= */

document.addEventListener("click", (e) => {

    if (e.target.id === "menu-toggle") {

        const menu = document.getElementById("mobile-menu")

        menu.classList.toggle("active")

    }

})

const searchInput = document.getElementById("project-search");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const query = this.value.toLowerCase();

        const projects = document.querySelectorAll(".project-card");

        projects.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(query)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}

document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

    const key = element.getAttribute("data-i18n-placeholder");

    if (translations[key]) {

        element.placeholder = translations[key];

    }

});
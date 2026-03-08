async function loadComponent(id, file) {

    const el = document.getElementById(id)

    if (!el) return

    const res = await fetch(file)

    const html = await res.text()

    el.innerHTML = html

    if (typeof applyTranslations === "function") {
        applyTranslations()
    }

}

document.addEventListener("DOMContentLoaded", () => {

    loadComponent("header", "components/header.html")

    loadComponent("footer", "components/footer.html")

})
import { reactive } from "vue";

export const themeStore = reactive({
    current: "dark",

    toggle() {
        this.current = this.current === "dark" ? "light" : "dark";
        document.documentElement.classList.toggle("light");
        localStorage.setItem("theme", this.current);
    }
});
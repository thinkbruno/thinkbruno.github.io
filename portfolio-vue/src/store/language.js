import { reactive } from "vue";
import pt from "../i18n/pt.json";
import en from "../i18n/en.json";
import es from "../i18n/es.json";

const langs = { pt, en, es };

export const languageStore = reactive({
    current: "pt",
    t(key) {
        return langs[this.current][key] || key;
    },
    set(lang) {
        this.current = lang;
        localStorage.setItem("lang", lang);
    }
});
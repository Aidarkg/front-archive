import { create } from "zustand";

    export const useLanguageStore = create((set) => ({
    language: "ru",
    setChangeLanguage: (lang) => {
        set({ language: lang });
    }
}));

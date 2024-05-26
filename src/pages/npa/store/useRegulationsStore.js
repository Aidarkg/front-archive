import axios from "axios";
import { create } from "zustand";

export const useRegulationsStore = create((set, get) => ({
    regulationsList: [],
    language: "ru",

    setLanguage: (lang) => {
        set({ language: lang });
    },

    fetchRegulations: async () => {
        try {
            const { language } = get();
            const response = await axios.get(`https://aidarzh.pythonanywhere.com/${language}/api/v1/kodeks`);
            set({ regulationsList: response.data.results });
        } catch (error) {
            set("Error fetching regulations", error.message);
        }
    },
}));
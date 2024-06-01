import axios from "axios";
import { create } from "zustand";

export const useRegulationsStore = create((set, get) => ({
    regulationsList: [],
    error: null,
    loading: false,
    language: "ru",

    setLanguage: (lang) => {
        set({ language: lang });
    },

    fetchRegulations: async () => {
        set ({loading: true, error: null});
        try {
            const { language } = get();
            const response = await axios.get(`https://aidarzh.pythonanywhere.com/${language}/api/v1/kodeks`);
            set({ regulationsList: response.data.results, loading: false, error: null });
        } catch (error) {
            set({regulationsList: [], loading: false, error: error.message });
        }
    },
}));
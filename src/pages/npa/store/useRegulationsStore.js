import axios from "axios";
import { create } from "zustand";

import { useLanguageStore } from "../../../utils/languageStore/UseLanguageStore";

export const useRegulationsStore = create((set) => ({
    regulationsList: [],
    error: null,
    loading: false,

    fetchRegulations: async () => {
        set({ loading: true, error: null });
        try {
            const { language } = useLanguageStore.getState();
            const response = await axios.get(`https://aidarzh.pythonanywhere.com/${language}/api/v1/kodeks`);
            set({ regulationsList: response.data.results, loading: false, error: null });
        } catch (error) {
            set({ regulationsList: [], loading: false, error: error.message });
        }
    },
}));
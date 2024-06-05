import axios from "axios";
import { create } from "zustand";

import { useLanguageStore } from "../../../utils/languageStore/UseLanguageStore";

export const useRegulationsStore = create((set, get) => ({
    regulationsList: [],
    next: null,
    error: null,
    loading: false,

    fetchRegulations: async () => {
        set({ loading: true, error: null });
        try {
            const { language } = useLanguageStore.getState();
            const response = await axios.get(`http://209.38.228.54:82/${language}/api/v1/kodeks`);
            set({ regulationsList: response.data.results, loading: false, error: null });
        } catch (error) {
            set({ regulationsList: [], loading: false, error: error.message });
        }
    },

    fetchMoreRegulations: async () => {
        const { next, regulationsList } = get();
        if (!next) return;

        set({ loading: true, error: null });
        try {
            const response = await axios.get(next);
            set({
                regulationsList: [...regulationsList, ...response.data.results],
                next: response.data.next,
                loading: false,
                error: null
            });
        } catch (error) {
            set({ next: null, loading: false, error: error.message });
        }
    }
}));
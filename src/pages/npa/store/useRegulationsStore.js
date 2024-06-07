import axios from "axios";
import { create } from "zustand";

// import { useLanguageStore } from "../../../utils/languageStore/UseLanguageStore";
// import { BASE_URL } from "../../../utils/constants/Constants"; FIX_ME Нужно сменить URL

const BASE_URL = "http://34.173.93.49";

export const useRegulationsStore = create((set, get) => ({
    regulationsList: [],
    next: null,
    error: null,
    loading: false,

    fetchRegulations: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/kodeks`);
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
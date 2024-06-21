import axios from "../../../axiosConfig";
import { create } from "zustand";


export const useRegulationsStore = create((set, get) => ({
    regulationsList: [],
    next: null,
    error: null,
    loading: false,

    fetchRegulations: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get("api/v1/kodeks");
            set({
                regulationsList: response.data.results,
                next: response.data.next,
                loading: false,
                error: null
            });
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
    },

    downloadFile: async (url, filename) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(url, { responseType: "blob", });
            const blob = new Blob([response.data], {type: "application/pdf"});
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            set({ loading: false });
        } catch (error) {
            set({ loading: false, error: error.message });
        }
    } 
}));
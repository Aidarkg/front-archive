import {create} from "zustand";
import {fetchData} from "../api/api.jsx";
export const useData = create(set => ({
    data: [],
    loading: false,
    error: null,
    getData: async () => {
        set({ loading: true });
        try {
            const data = await fetchData();
            set({ data, loading: false });
        } catch (error) {
            set({ error, loading: false });
        } finally {
            set({ loading: false });
        }
    }
}));
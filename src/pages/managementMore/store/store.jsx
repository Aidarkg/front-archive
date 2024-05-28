import { create } from "zustand";
import axios from "axios";

const API_URL = "https://aidarzh.pythonanywhere.com/ru/api/v1/management/";

export const useDataMore = create((set) => ({
    data: [],
    loading: false,
    error: null,
    getData: async (id = null) => {
        set({ loading: true, error: null });
        try {
            const url = id ? `${API_URL}${id}/` : API_URL;
            const response = await axios.get(url);
            set({ data: response.data });
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },

}));

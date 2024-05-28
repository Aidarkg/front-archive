import { create } from "zustand";
import axios from "axios";

const API_URL = "https://aidarzh.pythonanywhere.com/ru/api/v1/management/";

export const useData = create((set) => ({
    data: [],
    loading: false,
    error: null,
    getData: async () => {
        set({ loading: true });
        try {
            const response = await axios.get(API_URL);
            set({ data: response.data });
        } catch (error) {
            set({ error });
        } finally {
            set({ loading: false });
        }
    }
}));

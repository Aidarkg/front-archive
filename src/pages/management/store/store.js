import {useLanguageStore} from "../../../utils/languageStore/UseLanguageStore.js";
import axios from "axios";
import {create} from "zustand";

export const useData = create((set) => ({
    data: [],
    loading: false,
    error: null,
    getData: async (id = null) => {
        set({ loading: true, error: null });
        try {
            const { language } = useLanguageStore.getState(); // Get the current language from the store
            const API_URL = `https://aidarzh.pythonanywhere.com/${language}/api/v1/management/`; // Dynamically include language in the URL
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
import { create } from "zustand";
import axios from "axios";
import {useLanguageStore} from "../../../utils/languageStore/UseLanguageStore.js";

const BASE_URL = "http://34.173.93.49";
export const usePublications = create((set, get) => ({
    publications: [],
    nextPage: null,
    error: null,
    loading: false,

    getPublications: async () => {
        set({ loading: true, error: null });
        try {
            const { language } = useLanguageStore.getState();
            const response = await axios.get(`${BASE_URL}/${language}/api/v1/news`);
            const data = response.data;
            set({ publications: data.results, nextPage: data.next});
        } catch (error) {
            console.error('Failed fetch error', error);
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },

    loadMorePublications: async () => {
        const { nextPage } = get();
        if (!nextPage) return;
        set({ loading: true, error: null });
        try {
            const response = await axios.get(nextPage);
            const data = response.data;
            set((state) => ({
                publications: [...state.publications, ...data.results],
                nextPage: data.next,
            }));
        } catch (error) {
            console.error(error.message);
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },

    getPublicationFromId: async (id) => {
        set({ loading: true, error: null });
        try {
            const { language } = useLanguageStore.getState();
            const response = await axios.get(`https://aidarzh.pythonanywhere.com/${language}/api/v1/news/${id}`);
            const data = response.data;
            set({ detailPublicationInfo: data });
        } catch (error) {
            console.error(error.message);
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },
}));

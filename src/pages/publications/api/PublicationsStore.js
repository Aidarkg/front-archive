import { create } from "zustand";
import axios from "axios";

const BASE_URL = "https://aidarzh.pythonanywhere.com/api/v1";

export const usePublications = create((set) => ({
    publications: [],
    nextPage: null,
    error: null,
    loading: false,
    getPublications: async () => {
        set({ loading: true });
        try {
            const response = await axios.get(`${BASE_URL}/news`);
            const data = response.data;
            set({
                publications: data.results,
                nextPage: data.next,
                error: null,
            });
        } catch (error) {
            console.error('Failed fetch error', error);
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },
    loadMorePublications: async (nextPage) => {
        if (!nextPage) return;
        set({ loading: true });
        try {
            const response = await axios.get(nextPage);
            const data = response.data;
            set((state) => ({
                publications: [...state.publications, ...data.results],
                nextPage: data.next,
                error: null,
            }));
        } catch (error) {
            console.error(error.message);
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },
    getPublicationFromId: async (id) => {
        set({ loading: true });
        try {
            const response = await axios.get(`${BASE_URL}/news/${id}`);
            const data = response.data;
            set({ detailPublicationInfo: data, error: null });
        } catch (error) {
            console.error(error.message);
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },
}));

import { create } from "zustand";
import axios from "axios";

const BASE_URL = "http://34.173.93.49";
export const usePublications = create((set, get) => ({
    publications: [],
    nextPage: null,
    error: null,
    loading: false,
    getPublications: async (language) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/news`, {
                headers: {
                    'Accept-Language': language
                }
            });
            const data = response.data;
            set({ publications: data.results, nextPage: data.next });
        } catch (error) {
            console.error('Failed fetch error', error);
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },

    loadMorePublications: async (language) => {
        const { nextPage } = get();
        if (!nextPage) return;
        set({ loading: true, error: null });
        try {
            const response = await axios.get(nextPage, {
                headers: {
                    'Accept-Language': language
                }
            });
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

    getPublicationFromId: async (id, language) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/news/${id}`, {
                headers: {
                    'Accept-Language': language
                }
            });
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

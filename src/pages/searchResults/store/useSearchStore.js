import axios from 'axios';
import { create } from 'zustand';

const BASE_URL = "http://209.38.228.54:82";

const detectLanguage = (input) => {
    const kyrgyzChars = /[үөң]/i;
    const russianChars = /[а-яё]/i;

    if (kyrgyzChars.test(input)) {
        return "ky";
    } else if (russianChars.test(input)) {
        return "ru";
    } else {
        return "en";
    }
};

export const useSearchStore = create((set, get) => ({
    searchResults: [],
    nextResults: {},
    loading: false,
    error: null,
    fetchResults: async (query) => {
        if (query.trim() !== "") {
            set({ loading: true, error: null });
            try {
                const language = detectLanguage(query);
                const response = await axios.get(`${BASE_URL}/${language}/api/v1/search/?search=${encodeURIComponent(query)}`);

                const newsResults = response.data.news_results?.map((item) => ({ ...item, type: "news" })) || [];
                const photosResults = response.data.photos_results?.map((item) => ({ ...item, type: "photos" })) || [];
                const videosResults = response.data.videos_results?.map((item) => ({ ...item, type: "videos" })) || [];
                const servicesResults = response.data.services_results?.map((item) => ({ ...item, type: "services" })) || [];
                const managementsResults = response.data.managements_results?.map((item) => ({ ...item, type: "managements" })) || [];
                const codexesResults = response.data.codexes_results?.map((item) => ({ ...item, type: "codexes" })) || [];

                set({
                    searchResults: [
                        ...newsResults,
                        ...photosResults,
                        ...videosResults,
                        ...servicesResults,
                        ...managementsResults,
                        ...codexesResults,
                    ],
                    nextResults: {
                        news: response.data.news_next,
                        photos: response.data.photos_next,
                        videos: response.data.videos_next,
                        services: response.data.services_next,
                        managements: response.data.managements_next,
                        codexes: response.data.codexes_next,
                    },
                    loading: false
                });
            } catch (error) {
                set({ searchResults: [], loading: false, error: error.message });
            }
        } else {
            set({ searchResults: [], loading: false });
        }
    },

    loadMoreResults: async (type) => {
        const state = get();
        const nextResult = state.nextResults[type];
        if (nextResult) {
            set({ loading: true, error: null });
            try {
                const response = await axios.get(nextResult);

                const additionalResults = response.data[`${type}_results`]?.map((item) => ({ ...item, type })) || [];

                set((state) => ({
                    searchResults: [
                        ...state.searchResults,
                        ...additionalResults
                    ],
                    nextResults: {
                        ...state.nextResults,
                        [type]: response.data[`${type}_next`]
                    },
                    loading: false

                }));
            } catch (error) {
                set({ loading: false, error: error.message });
            }
        }
    },
    
    clearResults: () => set({ searchResults: [], loading: false, error: null })
}));


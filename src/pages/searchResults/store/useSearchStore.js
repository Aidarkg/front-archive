import axios from 'axios';
import { create } from 'zustand';

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

export const useSearchStore = create((set) => ({
    searchResults: [],
    loading: false,
    error: null,
    fetchResults: async (query) => {
        if (query.trim() !== "") {
            set({ loading: true, error: null });
            try {
                const language = detectLanguage(query);
                const response = await axios.get(`https://aidarzh.pythonanywhere.com/${language}/api/v1/search/?search=${query}`);
                const results = [
                    ...response.data.news_results,
                    ...response.data.codexes_results,
                    ...response.data.photos_results,
                    ...response.data.videos_results,
                    ...response.data.services_results,
                    ...response.data.managements_results
                ];
                set({ searchResults: results, loading: false });
            } catch (error) {
                set({ searchResults: [], loading: false, error: error.message });
            }
        } else {
            set({ searchResults: [], loading: false });
        }
    },
    clearResults: () => set({ searchResults: [], loading: false, error: null })
}));


import axios from '../../../axiosConfig';
import { create } from 'zustand';


export const useSearchStore = create((set, get) => ({
    searchResults: [],
    nextResults: {},
    loading: false,
    loadingMore: false,
    error: null,
    fetchResults: async (query) => {
        if (query.trim() !== "") {
            set({ loading: true, error: null });
            try {
                const response = await axios.get(`api/v1/search/?search=${encodeURIComponent(query)}`);

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
            set({ loadingMore: true, error: null });
            try {
                const response = await axios.get(nextResult);

                const additionalResults = response.data[`${type}_results`]?.map((item) => ({ ...item, type })) || [];

                set({
                    searchResults: [
                        ...state.searchResults,
                        ...additionalResults
                    ],
                    nextResults: {
                        ...state.nextResults,
                        [type]: response.data[`${type}_next`]
                    },
                    loadingMore: false

                });
            } catch (error) {
                set({ loadingMore: false, error: error.message });
            }
        }
    },
    
    clearResults: () => set({ searchResults: [], loading: false, error: null })
}));


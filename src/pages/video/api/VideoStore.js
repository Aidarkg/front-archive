import { create } from "zustand";
import axios from "axios";
import {useLanguageStore} from "../../../utils/languageStore/UseLanguageStore.js";

const BASE_URL = "http://34.173.93.49";

export const useVideo = create(set => ({
    videoContent: [],
    error: null,
    loading: false,
    nextPage: null,
    getVideoContent: async (language) => {
        set({ loading: true });
        try {
            const { language } = useLanguageStore.getState();
            const response=await axios.get(`${BASE_URL}/api/v1/video`, {
                headers: {
                    'Accept-Language': language
                }
            });
            const data=response.data;
            set({ videoContent: data.results, nextPage: data.next });
        } catch (error) {
            console.error(error.message);
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },
    loadMoreVideoContent: async (nextPage, language) => {
        if (!nextPage) return;
        set({ loading: true });
        try {
            const response = await axios.get(nextPage, {
                headers: {
                    'Accept-Language': language
                }
            });
            const data = response.data;
            set((state) => ({
                videoContent: [...state.videoContent, ...data.results],
                nextPage: data.next,
                error: null,
            }));
        } catch (error) {
            console.error('Failed fetch error', error);
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },
}));

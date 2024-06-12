import { create } from "zustand";
import axios from "axios";
import {BASE_URL} from "../../../utils/constants/Constants.js";


export const useVideo = create((set) => ({
    videoContent: [],
    error: null,
    loading: false,
    nextPage: null,
    getVideoContent: async (language) => {
        set({ loading: true });
        try {
            const { data } = await axios.get(`${BASE_URL}api/v1/video`, {
                headers: {
                    'Accept-Language': language
                }
            });
            set({ videoContent: data.results, nextPage: data.next, error: null });
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
            const { data } = await axios.get(nextPage, {
                headers: {
                    'Accept-Language': language
                }
            });
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

import { create } from "zustand";
import axios from "../../../axiosConfig.js";
import {BASE_URL} from "../../../utils/constants/Constants.js";


export const useVideo = create((set) => ({
    videoContent: [],
    error: null,
    loading: false,
    nextPage: null,
    getVideoContent: async () => {
        set({ loading: true });
        try {
            const { data } = await axios.get(`${BASE_URL}api/v1/video`);
            set({ videoContent: data.results, nextPage: data.next, error: null });
        } catch (error) {
            console.error(error.message);
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },
    loadMoreVideoContent: async (nextPage ) => {
        if (!nextPage) return;
        set({ loading: true });
        try {
            const { data } = await axios.get(nextPage);
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

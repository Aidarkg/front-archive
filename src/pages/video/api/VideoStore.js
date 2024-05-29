import {create} from "zustand";
import axios from "axios";

const BASE_URL = "https://aidarzh.pythonanywhere.com/api/v1";

export const useVideo = create(set => ({
    videoContent: [],
    error: null,
    loading: false,
    nextPage: null,
    getVideoContent: async () => {
        set ({loading: true});
        try {
            const response = await axios.get(`${BASE_URL}/video`);
            const data = response.data;
            console.log(data)
            set({videoContent: data.results, nextPage: data.next});
        } catch (error) {
            console.error(error.message);
        } finally {
            set ({loading: false});
        }
    },
    loadMoreVideoContent: async (nextPage) => {
        if (!nextPage) return;
        set({ loading: true });
        try {
            const response = await axios.get(nextPage);
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
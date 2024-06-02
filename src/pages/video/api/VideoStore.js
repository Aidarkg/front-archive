import { create } from "zustand";
import axios from "axios";
import {useLanguageStore} from "../../../utils/languageStore/UseLanguageStore.js";

// const BASE_URL = "https://aidarzh.pythonanywhere.com/api/v1"; FIXME

export const useVideo = create(set => ({
    videoContent: [],
    error: null,
    loading: false,
    nextPage: null,
    getVideoContent: async () => {
        set({ loading: true });
        try {
            const { language } = useLanguageStore.getState();
            const [responseVideos, responseVideoLinks] = await Promise.all([
                axios.get(`https://aidarzh.pythonanywhere.com/${language}/api/v1/video`),
                axios.get(`https://aidarzh.pythonanywhere.com/${language}/api/v1/video_link`)
            ]);

            const videos = responseVideos.data.results.map(video => ({ ...video, type: 'video' }));
            const videoLinks = responseVideoLinks.data.results.map(link => ({ ...link, type: 'youtube' }));

            const combinedContent = [...videos, ...videoLinks];

            set({ videoContent: combinedContent, nextPage: responseVideos.data.next });
        } catch (error) {
            console.error(error.message);
            set({ error: error.message });
        } finally {
            set({ loading: false });
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

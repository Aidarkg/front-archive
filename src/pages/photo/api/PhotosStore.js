import {create} from "zustand";
import axios from "axios";
import {useLanguageStore} from "../../../utils/languageStore/UseLanguageStore.js";

// const BASE_URL = "https://aidarzh.pythonanywhere.com/api/v1"; FIXME

export const usePhotos = create((set) => ({
    photosContent: [],
    nextPage: null,
    images: [],
    error: null,
    photoData: [],
    loading: false,
    getPhotosContent: async () => {
        set({loading: true});
        try {
            const { language } = useLanguageStore.getState();
            const response = await axios.get(`https://aidarzh.pythonanywhere.com/${language}/api/v1/photos`);
            const data = response.data;
            set({
                photosContent: response.data.results,
                nextPage: data.next,
            });
        } catch (error) {
            console.error('Failed fetch error', error);
            set({error: error.message});
        } finally {
            set({loading: false});
        }
    },
    loadMorePhotosContent: async (nextPage) => {
        if (!nextPage) return;
        set({loading: true});
        try {
            const response = await axios.get(nextPage);
            const data = response.data;
            set((state) => ({
                photosContent: [...state.photosContent, ...data.results],
                nextPage: data.next,
                error: null,
            }));
        } catch (error) {
            console.error('Failed fetch error', error);
            set({error: error.message});
        } finally {
            set({loading: false});
        }
    },
    getImages: async (id) => {
        set({loading: true});
        try {
            const { language } = useLanguageStore.getState();
            const response = await axios.get(`https://aidarzh.pythonanywhere.com/${language}/api/v1/photos/${id}`);
            const data = await response.data;
            set({images: data.photo, photoData: data});
        } catch (error) {
            console.error(error.message);
            set({error: error.message});
        } finally {
            set({loading: false});
        }
    }
}));

import {create} from "zustand";
import axios from "axios";

const BASE_URL = "https://aidarzh.pythonanywhere.com/api/v1";

export const usePhotos = create((set) => ({
    photosContent: [],
    nextPage: null,
    images: [],
    error: null,
    title: '',
    loading: false,
    getPhotosContent: async () => {
        set({loading: true});
        try {
            const response = await axios.get(`${BASE_URL}/photos`);
            const data = response.data;
            set({
                photosContent: data.results,
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
            const response = await axios.get(`${BASE_URL}/photos/${id}`);
            const data = await response.data;
            set({images: data.photo, title: data.title, error: null});
        } catch (error) {
            console.error(error.message);
            set({error: error.message});
        } finally {
            set({loading: false});
        }
    }
}));

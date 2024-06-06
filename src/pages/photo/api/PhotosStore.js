import {create} from "zustand";
import axios from "axios";
// import {useLanguageStore} from "../../../utils/languageStore/UseLanguageStore.js"; FIXME


const BASE_URL = "http://34.173.93.49";

export const usePhotos = create((set, get) => ({
    photosContent: [],
    archivePhoto: [],
    nextPage: null,
    images: [],
    archiveContent: [],
    error: null,
    photoData: [],
    loading: false,
    getPhotosContent: async () => {
        set({loading: true});
        try {
            // const { language } = useLanguageStore.getState(); FIXME
            const response = await axios.get(`${BASE_URL}/api/v1/photos/`);
            const data = response.data;
            console.log(data)
            set({
                photosContent: data.results.gallery,
                archivePhoto: data.results.photo_home,
                nextPage: data.next,
            });
        } catch (error) {
            console.error('Failed fetch error', error);
            set({error: error.message});
        } finally {
            set({loading: false});
        }
    },
    loadMorePhotosContent: async () => {
        const { nextPage } = get();
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
            console.log(data);
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
            // const { language } = useLanguageStore.getState(); FIXME
            const response = await axios.get(`${BASE_URL}/api/v1/photos/${id}`);
            const data = await response.data;
            set({images: data.photo, photoData: data});
        } catch (error) {
            console.error(error.message);
            set({error: error.message});
        } finally {
            set({loading: false});
        }
    },
    getArchiveImages: async (id) => {
        set({loading: true});
        try {
            // const { language } = useLanguageStore.getState(); FIXME
            const response = await axios.get(`${BASE_URL}/api/v1/photo_home/${id}`);
            const data = await response.data;
            console.log(data);
            set({archiveContent: data});
        } catch (error) {
            console.error(error.message);
            set({error: error.message});
        } finally {
            set({loading: false});
        }
    },

}));

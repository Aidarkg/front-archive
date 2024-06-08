import {create} from "zustand";
import axios from "axios";


const BASE_URL = "http://34.173.93.49";

export const usePhotos = create((set) => ({
    photosContent: [],
    archivePhoto: [],
    nextPage: null,
    images: [],
    archiveContent: [],
    error: null,
    photoData: [],
    loading: false,
    getPhotosContent: async (language) => {
        set({loading: true});
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/photos/`, {
                headers: {
                        'Accept-Language': language
                    }});
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
    loadMorePhotosContent: async (language) => {
        const { nextPage } = get();
        if (!nextPage) return;
        set({loading: true});
        try {
            const response = await axios.get(nextPage, {
                headers: {
                    'Accept-Language': language
                }
            });
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
    getImages: async (id, language) => {
        set({loading: true});
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/photos/${id}`, {
                headers: {
                    'Accept-Language': language
                }
            });
            const data = await response.data;
            set({images: data.photo, photoData: data});
        } catch (error) {
            console.error(error.message);
            set({error: error.message});
        } finally {
            set({loading: false});
        }
    },
    getArchiveContent:async (language)=>{
        set({loading: true});
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/photo_home`, {
                headers: {
                    'Accept-Language': language
                }});
            const data = response.data;
            set({
                archivePhoto: data.results,
            });
        } catch (error) {
            console.error('Failed fetch error', error);
            set({error: error.message});
        } finally {
            set({loading: false});
        }
    },
    getArchiveImages: async (id, language) => {
        set({loading: true});
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/photo_home/${id}`, {
                headers: {
                    'Accept-Language': language
                }
            });
            const data = await response.data;
            set({archiveContent: data});
        } catch (error) {
            console.error('Failed fetch error', error);
            set({error: error.message});
        } finally {
            set({loading: false});
        }
    },
}));

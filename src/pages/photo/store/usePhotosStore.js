import {create} from "zustand";
import axios from "../../../axiosConfig.js";
import {BASE_URL} from "../../../utils/constants/Constants.js";


export const usePhotos = create((set) => ({
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
            const response = await axios.get(`${BASE_URL}api/v1/photos/`);
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
            const {data} = await axios.get(nextPage);
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
            const response = await axios.get(`${BASE_URL}api/v1/photos/${id}`);
            const data = await response.data;
            set({images: data.photo, photoData: data});
        } catch (error) {
            console.error(error.message);
            set({error: error.message});
        } finally {
            set({loading: false});
        }
    },
    getArchiveContent:async ()=>{
        set({loading: true});
        try {
            const response = await axios.get(`${BASE_URL}api/v1/photo_home`);
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
    getArchiveImages: async (id) => {
        set({loading: true});
        try {
            const response = await axios.get(`${BASE_URL}api/v1/photo_home/${id}`);
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

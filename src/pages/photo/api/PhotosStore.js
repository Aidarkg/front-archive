import {create} from "zustand";
import axios from "axios";

const BASE_URL = "https://aidarzh.pythonanywhere.com/api/v1";

export const usePhotos = create(set => ({
    photosContent: [],
    images: [],
    error: null,
    title: '',
    loading: false,
    getPhotosContent: async () => {
        set({loading: true});
        try {
            const response=await axios.get(`${BASE_URL}/photos`);
            const data=response.data;
            const results=data.results;
            set({photosContent: results});
        } catch (error) {
            console.error(error.message);
        } finally {
            set({loading: false});
        }
    },
    getImages: async (id)=> {
        try {
            const response=await axios.get(`${BASE_URL}/photos/${id}`);
            const data= await response.data;
            const photos=data.photo;
            const title=data.title;
            console.log(data)
            set({images: photos, title: title});
        } catch (error) {
            console.error(error, 'error');
        }
    }
}));
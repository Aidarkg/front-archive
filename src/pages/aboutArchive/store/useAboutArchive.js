import {create} from "zustand";
import axios from "../../../axiosConfig.js";
import {BASE_URL} from "../../../utils/constants/Constants.js";

export const useAboutArchive=create((set)=>({
    aboutArchiveContent: [],
    error: null,
    loading: false,
    getAboutArchive: async ()=>{
        set({loading: true});
        try {
            const response= await axios.get (`${BASE_URL}api/v1/about_archive`);
            set({aboutArchiveContent: response.data});
        } catch (error) {
            console.error('Failed fetch error', error);
            set({error: error.message});
        } finally {
            set({loading: false});
        }
    }
}));
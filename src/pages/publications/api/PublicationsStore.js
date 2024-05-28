import {create} from "zustand";
import axios from "axios";

const BASE_URL = "https://aidarzh.pythonanywhere.com/api/v1";

export const usePublications = create(set => ({
    publications: [],
    detailPublicationInfo: [],
    error: null,
    getPublications: async () => {
        try {
            const response=await axios.get(`${BASE_URL}/news`);
            const data= await response.data;
            const results=data.results;
            set({publications: results});
        } catch (error) {
            console.error('Failed fetch error', error);
        }
    },
    getPublicationFromId: async (id)=>{
        try {
            const response=await axios.get(`${BASE_URL}/news/${id}`);
            const data= await response.data;
            set({detailPublicationInfo: data});
        } catch (error) {
            console.error(error.message);
        }
    }
}));

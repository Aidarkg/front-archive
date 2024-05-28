import {create} from "zustand";
import axios from "axios";

const BASE_URL = "https://aidarzh.pythonanywhere.com/api/v1";

export const usePublications = create(set => ({
    publications: [],
    detailPublicationInfo: [],
    error: null,
    loading: false,
    getPublications: async () => {
        set ({loading: true});
        try {
            const response=await axios.get(`${BASE_URL}/news`);
            const data= await response.data;
            set({publications: data.results});
        } catch (error) {
            console.error('Failed fetch error', error);
        } finally {
            set ({loading: false});
        }
    },
    getPublicationFromId: async (id)=>{
        set ({loading: true});
        try {
            const response=await axios.get(`${BASE_URL}/news/${id}`);
            const data= await response.data;
            set({detailPublicationInfo: data});
        } catch (error) {
            console.error(error.message);
        } finally {
            set ({loading: false});
        }
    }
}));

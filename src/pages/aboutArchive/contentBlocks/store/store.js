import axios from "axios";
import { BASE_URL } from "../../../../utils/constants/Constants";
import { create } from "zustand";

export const useData = create((set, get) => ({
    title: [],
    description: [],
    photo: [],
    error: null,
    loading: false,

    getData: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${BASE_URL}api/v1/about_archive_list`);            
            set({
                title: data.title,
                description: data.description,
                photo: data.results,
            });
        } catch (error) {            
            set({ error: error.message, loading: false });
        }
    }    
});

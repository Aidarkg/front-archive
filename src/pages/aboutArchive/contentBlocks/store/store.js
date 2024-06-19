import axios from "../../../../axiosConfig";
import { BASE_URL } from "../../../../utils/constants/Constants";
import { create } from "zustand";

export const useAboutArchive = create((set) => ({
    aboutArchive: [],
    error: null,
    loading: false,

    getData: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${BASE_URL}api/v1/about_archive/`);            
            set({ aboutArchive: response.data });
        } catch (error) {            
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },    
}));

import { create } from "zustand";
import { BASE_URL } from "../../../utils/constants/Constants";
import axios from "../../../axiosConfig";

export const useBannerStore = create((set) => ({
    bannerPhoto: [],
    loading: false,
    error: null,
    emblem: [],

    getData: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${BASE_URL}api/v1/main/`);
            set({ bannerPhoto: response.data.logo });            
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    }, 

    getEmblem: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${BASE_URL}api/v1/emblem/`);
            set({ emblem: response.data });            
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },
})); 
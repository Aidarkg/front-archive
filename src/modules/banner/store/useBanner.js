import { create } from "zustand";
import axios from "axios";
import {BASE_URL} from "../../../utils/constants/Constants.js";


export const useBanner = create((set) => ({
    banner: "",
    symbol:"",
    error: null,
    loading: false,
    getBanner: async () => {
        set({ loading: true });
        try {
            const {data} = await axios.get(`${BASE_URL}api/v1/main`);
            set({ banner: data.logo.logo, error: null });
        } catch (error) {
            console.error(error.message);
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },
    getSymbol: async ()=>{
        set({ loading: true });
        try {
            const {data} = await axios.get(`${BASE_URL}api/v1/emblem`);
            set({ symbol: data[0].emblem, error: null });
        } catch (error) {
            console.error(error.message);
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    }
}));

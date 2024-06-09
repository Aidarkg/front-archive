import { create } from "zustand";
import axios from "../../../axiosConfig";
import {BASE_URL} from "../../../utils/constants/Constants.js";
export const useDataMore = create((set) => ({
    data: [],
    loading: false,
    error: null,
    getData: async (id = null) => {
        set({ loading: true, error: null });
        try {
            const url = id ? `${BASE_URL}api/v1/management/${id}` : `${BASE_URL}api/v1/management/`;
            const response = await axios.get(url);
            set({ data: response.data });
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },
}));

import axios from "axios";
import {create} from "zustand";
import {BASE_URL} from "../../../utils/constants/Constants.js";

export const useData = create((set) => ({
    data: [],
    loading: false,
    error: null,
    getData: async () => {
        set({ loading: true, });
        try {
            const response = await axios.get(`${BASE_URL}ru/api/v1/management/`);
            set({ data: response.data });
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },
}));
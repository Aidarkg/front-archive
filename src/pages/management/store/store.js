import {create} from "zustand";
import {BASE_URL} from "../../../utils/constants/Constants.js";
import axios from "../../../axiosConfig";

export const useData = create((set) => ({
    data: [],
    loading: false,
    error: null,
    getData: async () => {
        set({ loading: true, });
        try {
            const response = await axios.get(`${BASE_URL}api/v1/management/`);
            set({ data: response.data });
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },
}));
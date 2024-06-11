import {create} from "zustand";
import axios from "../../../../axiosConfig.js";
import {BASE_URL} from "../../../../utils/constants/Constants.js";
export const useDataOrganization = create((set) => ({
    data: [],
    loading: false,
    error: null,
    getData: async () => {
        set({ loading: true, });
        try {
            const response = await axios.get(`${BASE_URL}api/v1/organizations/`);
            set({ data: response.data });
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },
}));
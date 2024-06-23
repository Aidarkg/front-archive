import create from "zustand";
import axios from "../../../axiosConfig.js";
import {BASE_URL} from "../../../utils/constants/Constants.js";
export const getContactsMain = create((set) => ({
    contacts: {
        contacts: [],
    },
    loading: false,
    error: null,
    fetchContacts: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/main/`);
            set({ contacts: response.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    }
}));



import create from "zustand";
import axios from "../../../axiosConfig.js";

const useStoreContacts = create((set) => ({
    contacts: {
        archive: [],
        anticorruption: [],
        callCenter: []
    },
    loading: false,
    error: null,
    fetchContacts: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get('http://209.38.228.54:82/api/v1/contacts/');
            set({ contacts: response.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    }
}));

export default useStoreContacts;

import {create} from "zustand";
import axios from "../../../axiosConfig";
import {BASE_URL} from "../../../utils/constants/Constants";


export const useServiceStore = create((set) => ({
    service: [],
    loading: false,
    error: null,
    fetchData: async () => {
        set({loading: true, error: null});
        try {
            const response = await axios.get(`${BASE_URL}api/v1/service`);
            set({service: response.data.results, loading: false});
        } catch (error) {
            set({error: error.message, loading: false});
        }
    }
}));
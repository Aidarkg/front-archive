import { create } from "zustand";
import axios from "axios";

const API_URL = "https://aidarzh.pythonanywhere.com/api/v1/";

export const useDataAll = create((set) => ({
    data: [],
    loading: false,
    error: null,
    getData: async () => {
        set({ loading: true });
        try {
            const [managementResponse, serviceResponse] = await Promise.all([
                axios.get(`${API_URL}management`),
                axios.get(`${API_URL}service`)
            ]);
            set({
                data:{
                    management: managementResponse.data,
                    service: serviceResponse.data
                }
            });
        } catch (error) {
            set({ error });
        } finally {
            set({ loading: false });
        }
    }
}));

import { create } from "zustand";
import axios from "axios";

const API_URL = "https://aidarzh.pythonanywhere.com/ru/api/v1/visitors/";

export const useCounter = create((set) => ({
    data: [],
    getData: async () => {
        try {
            const response = await axios.get(API_URL);
            set({ data: response.data });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}));


import { create } from "zustand";
import axios from "axios";
import {BASE_URL} from "../../../utils/constants/Constants.js";

export const useCounter = create((set) => ({
    data: [],
    getData: async () => {
        try {
            const response = await axios.get(`${BASE_URL}api/v1/visitors`);
            set({ data: response.data });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}));


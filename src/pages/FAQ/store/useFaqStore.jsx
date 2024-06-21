import { create } from "zustand";
import axios from "../../../axiosConfig";
import {BASE_URL} from "../../../utils/constants/Constants.js";

const useFaqStore = create((set) => ({
    faqs: [],
    slicedFaqs: [],
    fetchFaqs: async() => {
        try {
            const response = await axios.get(`${BASE_URL}api/v1/faq`);
            set({faqs: response.data});
            set({ slicedFaqs: response.data.slice(0, 5) });
        } catch (error) {
            console.error("Ошибка при получении данных:", error);
        }
    }
}));

export default useFaqStore;
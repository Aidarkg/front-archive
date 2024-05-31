import { create } from "zustand";
import axios from "axios";

const useFaqStore = create((set) => ({
    faqs: [],
    fetchFaqs: async() => {
        try {
            const response = await axios.get("https://aidarzh.pythonanywhere.com/ru/api/v1/faq/");
            set({faqs: response.data.results});
        } catch (error) {
            console.error("Ошибка при получении данных:", error);
        }
    }
}));

export default useFaqStore;
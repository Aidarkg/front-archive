import { create } from "zustand";
import axios from "../../../axiosConfig";
import { BASE_URL } from "../../../utils/constants/Constants.js";

const useFaqStore = create((set) => ({
   faqs: [],
   loading: false,
   error: null,
   slicedFaqs: [],
   fetchFaqs: async () => {
      set({ loading: true, error: null });
      try {
         const response = await axios.get(`${BASE_URL}api/v1/faq`);
         set({ faqs: response.data });
         set({ slicedFaqs: response.data.slice(0, 5) });
      } catch (error) {
         set({ error: error.message, loading: false });
      }
   },
}));

export default useFaqStore;

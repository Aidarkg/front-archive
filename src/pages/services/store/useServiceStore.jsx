import { create } from "zustand";
import axios from "../../../axiosConfig";
import { BASE_URL } from "../../../utils/constants/Constants";

export const useServiceStore = create((set, get) => ({
   service: [],
   loading: false,
   error: null,
   nextPage: `${BASE_URL}api/v1/service?page=2`,
   fetchData: async () => {
      set({ loading: true, error: null });
      try {
         const response = await axios.get(`${BASE_URL}api/v1/service`);
         const data = response.data;
         set({
            service: data.results.slice(0, 9), 
            loading: false,
            nextPage: data.next,
         });
      } catch (error) {
         set({ error: error.message, loading: false });
      }
   },
   downloadDocument: async () => {
      set({ isLoading: true });
      try {
         const response = await axios.get(`${BASE_URL}api/v1/service_price/`, {
            responseType: "blob",
         });
         const url = window.URL.createObjectURL(new Blob([response.data]));
         const link = document.createElement("a");
         link.href = url;
         link.setAttribute("download", "service_price.pdf");
         document.body.appendChild(link);
         link.click();
         link.remove();
      } catch (error) {
         console.error("Error downloading the document", error);
      } finally {
         set({ isLoading: false });
      }
   },
   loadMoreService: async () => {
      const { nextPage } = get();
      if (!nextPage) return;
      set({ loading: true, error: null });
      try {
         const response = await axios.get(nextPage);
         const data = response.data;
         set((state) => ({
            service: [...state.service, ...data.results.slice(0, 9)], 
            nextPage: data.next,
         }));
      } catch (error) {
         console.error(error.message);
         set({ error: error.message });
      } finally {
         set({ loading: false });
      }
   },
}));

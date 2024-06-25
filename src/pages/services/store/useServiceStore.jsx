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
   downloadPDF: async () => {
      try {
        const apiUrl = 'http://209.38.228.54:82/api/v1/service_price/';
        const apiResponse = await fetch(apiUrl);
        if (!apiResponse.ok) {
          throw new Error('Ошибка при загрузке данных из API');
        }
        const apiData = await apiResponse.json();
        if (!apiData[0].file) {
          throw new Error('URL файла не найден в ответе API');
        }
        const fileUrl = apiData[0].file;
        const response = await fetch(fileUrl);
        if (!response.ok) {
          throw new Error('Ошибка при загрузке файла');
        }
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'Прайс-лист.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(downloadUrl);
      } catch (error) {
        console.error('Ошибка при загрузке PDF:', error);
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

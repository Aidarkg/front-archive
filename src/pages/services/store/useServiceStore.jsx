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
    },
    downloadDocument: async () => {
        set({ isLoading: true });
        try {
          const response = await axios.get(`${BASE_URL}api/v1/service_price/`, {
            responseType: 'blob', 
          });
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'service_price.pdf'); 
          document.body.appendChild(link);
          link.click();
          link.remove();
        } catch (error) {
          console.error('Error downloading the document', error);
        } finally {
          set({ isLoading: false });
        }
      },
}));
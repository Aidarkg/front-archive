import {create} from "zustand";
import axios from "axios";

const BASE_URL = "https://aidarzh.pythonanywhere.com/api/v1";

export const useVideo = create(set => ({
    videoContent: [],
    error: null,
    loading: false,
    getVideoContent: async () => {
        set ({loading: true});
        try {
            const response = await axios.get(`${BASE_URL}/video`);
            const data = response.data;
            const results=data.results;
            set({videoContent: results});
        } catch (error) {
            console.error(error.message);
        } finally {
            set ({loading: false});
        }
    }
}));
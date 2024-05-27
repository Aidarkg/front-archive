import {create} from "zustand";
import axios from "axios";

const BASE_URL = "https://aidarzh.pythonanywhere.com/api/v1";

export const useVideo = create(set => ({
    videoContent: [],
    error: null,
    getVideoContent: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/video`);
            const data = response.data;
            const results=data.results;
            set({videoContent: results});
        } catch (error) {
            console.error(error.message);
        }
    }
}));
import {create} from "zustand";

const BASE_URL = "https://aidarzh.pythonanywhere.com/api/v1";

export const usePublications = create(set => ({
    publications: [],
    error: null,
    getPublications: async () => {
        try {
            const response = await fetch(`${BASE_URL}/news`);
            const data = await response.json();
            const results = data.results;
            console.warn(results);
            set({publications: results});
        } catch (error) {
            console.error(error.message);
        }
    }
}));
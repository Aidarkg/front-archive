import {create} from "zustand";
import axios from "axios";
import {BASE_URL} from "../../../utils/constants/Constants.js";

const useQuestionStore = create((set) => ({
    submitQuestion: async (data) => {
        try {
            const response = await axios.post(`${BASE_URL}api/v1/question/create/`, data);
            set({ response: response.data });
        } catch (error) {
            console.error("Error submitting question:", error);
        }
    },
}));

export default useQuestionStore;

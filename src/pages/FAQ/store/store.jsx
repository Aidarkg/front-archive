import {create} from "zustand";
import axios from "axios";

const useQuestionStore = create((set) => ({
    submitQuestion: async (data) => {
        try {
            const response = await axios.post("https://aidarzh.pythonanywhere.com/api/v1/question/create/", data);
            set({ response: response.data });
        } catch (error) {
            console.error("Error submitting question:", error);
        }
    },
}));


export default useQuestionStore;

import axios from "axios";

const API_URL = "https://aidarzh.pythonanywhere.com/ru/api/v1/management/";

export const fetchData = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

import axios from "axios";
import i18n from "./utils/i18n/i18n";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

instance.interceptors.request.use(config => {
    config.headers["Accept-Language"] = i18n.language;
    return config;
}, error => {
    return Promise.reject(error);
});

export default instance;
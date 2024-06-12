import {create} from "zustand";
import axios from "../../../../axiosConfig";
import {BASE_URL} from "../../../../utils/constants/Constants";

const useOrganizationsStore = create((set) => ({
  organizations: [],
  contacts: [],
  loading: false,
  error: null,
  fetchOrganizations: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${BASE_URL}api/v1/organizations/`);
      set({ organizations: response.data.results, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useOrganizationsStore;

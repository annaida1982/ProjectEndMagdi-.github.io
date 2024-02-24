import axios from "axios";
import { config } from "../../utils/axiosConfig";

// get products

const postQuery = async (contactData) => {
  const response = await axios.post("/api/enquiry", contactData);

  if (response.data) {
    return response.data;
  }
};

export const contactService = {
  postQuery,
};

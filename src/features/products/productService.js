import axios from "axios";
import { config } from "../../utils/axiosConfig";

// get products

const getProducts = async (data) => {
  console.log(data);
  const response = await axios.get(
    `/api/product?${data?.brand ? `brand=${data?.brand}&&` : ""}${
      data?.tag ? `tags=${data?.tag}&&` : ""
    }${data?.category ? `category=${data?.category}&&` : ""}${
      data?.minPrice ? `price[gte]=${data?.minPrice}&&` : ""
    }${data?.maxPrice ? `price[lte]=${data?.maxPrice}&&` : ""}${
      data?.sort ? `sort=${data?.sort}&&` : ""
    }`
  );

  if (response.data) {
    return response.data;
  }
};

//  get product service id
const getSingleProduct = async (id) => {
  const response = await axios.get(`/api/product/${id}`);

  if (response.data) {
    return response.data;
  }
};

// Add Wishlist
const addWishlist = async (prodId) => {
  const response = await axios.put(
    "/api/product/wishlist",
    { prodId: prodId},
    config
  );

  if (response.data) {
    return response.data;
  }
};

// rating
const rateProduct = async (data) => {
  const response = await axios.put("/api/product/rating", data, config);

  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getProducts,
  addWishlist,
  getSingleProduct,
  rateProduct,
};

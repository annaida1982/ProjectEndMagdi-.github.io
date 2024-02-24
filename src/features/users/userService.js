import axios from "axios";
import { config } from "../../utils/axiosConfig";

// register
const register = async (userData) => {
  const response = await axios.post("/api/user/register", userData);

  if (response?.data) {
    localStorage.setItem("customer", JSON.stringify(response?.data));
  }
  return response?.data;
};

// login

const login = async (userData) => {
  const response = await axios.post("/api/user/login", userData);

  if (response?.data) {
    return response?.data;
  }
};

// get wishlist

const getwishlist = async (data) => {
  const response = await axios.get("/api/user/wishlist", data);
  if (response?.data) {
    return response?.data;
  }
};

// addToCart
const addToCart = async (cartData) => {
  const response = await axios.post("/api/user/cart", cartData, config);
  if (response?.data) {
    return response?.data;
  }
};

// getCart
const getCart = async (data) => {
  const response = await axios.get("/api/user/cart", data);
  if (response?.data) {
    return response?.data;
  }
};

// delete product cart
const removeProductFromCart = async (data) => {
  const response = await axios.delete(
    `/api/user/delete-product-cart/${data.id}`,
    data.config2
  );
  if (response?.data) {
    return response?.data;
  }
};

// update product Quantity
const updateProductFromCart = async (data) => {
  const response = await axios.delete(
    `/api/user/update-product-cart/${data.cartItemId}/${data.quantity}`,
    data.config2
  );
  if (response?.data) {
    return response?.data;
  }
};

// update user
const updateuser = async (data) => {
  const response = await axios.put("/api/user/edit-user", data.data, data.config2);
  if (response?.data) {
    return response?.data;
  }
};

// forget password
const forgetPassword = async (data) => {
  const response = await axios.post(
    "/api/user/forgot-password-token",
    data,
    config
  );
  if (response?.data) {
    return response?.data;
  }
};

// reset password
const resetPassword = async (data) => {
  const response = await axios.put(
    `/api/user/reset-password/${data?.token}`,
    { password: data?.password },
    config
  );
  if (response?.data) {
    return response?.data;
  }
};

// create order here
const createOrder = async (orderDetail) => {
  const response = await axios.post(
    `/api/user/cart/create-order`,
    orderDetail,
    config
  );
  if (response?.data) {
    return response?.data;
  }
};

// get orders here
const getOrders = async (data) => {
  const response = await axios.get(`/api/user/getmyorders`, data);
  if (response?.data) {
    return response?.data;
  }
};

// empty cart
const emptyCart = async (data) =>{
  const response = await axios.delete(`/api/user/empty-cart`, data);
  if (response?.data) {
    return response?.data;
  }
}


// Subcribe Email
const SubCribeEmail = async (subcribe) =>{
  const response = await axios.post(`/api/user/subcribe`, subcribe);
  if (response?.data) {
    return response?.data;
  }
}





export const authService = {
  register,
  login,
  getwishlist,
  addToCart,
  getCart,
  removeProductFromCart,
  updateProductFromCart,
  updateuser,
  forgetPassword,
  resetPassword,
  createOrder,
  getOrders,
  emptyCart,
  SubCribeEmail
};

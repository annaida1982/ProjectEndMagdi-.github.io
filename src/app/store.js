import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/users/userSlice";
import productReducer from "../features/products/productSlice";
import contactReducer from "../features/contact/contactSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    contact: contactReducer,
  },
});

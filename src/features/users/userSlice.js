import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authService } from "./userService";

// register
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//  get wishlist
export const getWishlist = createAsyncThunk(
  "auth/wishlist",
  async (data, thunkAPI) => {
    try {
      return await authService.getwishlist(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// addToCart
export const addProToCart = createAsyncThunk(
  "auth/cart/add",
  async (cartData, thunkAPI) => {
    try {
      return await authService.addToCart(cartData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// getcart
export const getToCart = createAsyncThunk(
  "auth/cart/get",
  async (data, thunkAPI) => {
    try {
      return await authService.getCart(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// deleteProductFromCart
export const deleteProductFromCart = createAsyncThunk(
  "auth/cart/product/delete",
  async (data, thunkAPI) => {
    try {
      return await authService.removeProductFromCart(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteUserCart = createAsyncThunk(
  "auth/cart/delete",
  async (data, thunkAPI) => {
    try {
      return await authService.emptyCart(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// updateProductFromCart
export const updateProductFromCart = createAsyncThunk(
  "auth/cart/product/update",
  async (data, thunkAPI) => {
    try {
      return await authService.updateProductFromCart(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// updateUser
export const updateUserProfile = createAsyncThunk(
  "auth/update-user/profile",
  async (data, thunkAPI) => {
    try {
      return await authService.updateuser(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// forget Password
export const forgetPassword = createAsyncThunk(
  "auth/forget-password",
  async (data, thunkAPI) => {
    try {
      return await authService.forgetPassword(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// reset password
export const resetPassword = createAsyncThunk(
  "auth/reset-password",
  async (data, thunkAPI) => {
    try {
      return await authService.resetPassword(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//  create Order here
export const CreateOder = createAsyncThunk(
  "auth/create-order",
  async (orderDetail, thunkAPI) => {
    try {
      return await authService.createOrder(orderDetail);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// get Orders
export const getOders = createAsyncThunk(
  "auth/get-orders",
  async (data, thunkAPI) => {
    try {
      return await authService.getOrders(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const subcribe = createAsyncThunk(
  "auth/subcribe",
  async (subcribe, thunkAPI) => {
    try {
      return await authService.SubCribeEmail(subcribe);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Reset here

export const resetState = createAction("Reset_all");

const getCustomerfromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  user: getCustomerfromLocalStorage,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const userSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdUser = action.payload;
        if (state.isSuccess === true) {
          toast.info("User Created Successfully");
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        if (state.isSuccess === true) {
          localStorage.setItem("token", action.payload.token);
          localStorage.setItem("user", JSON.stringify(action?.payload));
          toast.info("User Login Successfully");
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      })
      .addCase(getWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.getWIshlist = action.payload;
      })
      .addCase(getWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(addProToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cartProduct = action.payload;
        if (state.isSuccess === true) {
          toast.info("Product Added To Cart");
        }
      })
      .addCase(addProToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cartProducts = action.payload;
      })
      .addCase(getToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteProductFromCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProductFromCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deleteProductCart = action.payload;
        if (state.isSuccess === true) {
          toast.success("Product Deleted From Cart Successfully!");
        }
      })
      .addCase(deleteProductFromCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error("Sorry Something Went Wrong!");
        }
      })
      .addCase(updateProductFromCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProductFromCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updateProductCart = action.payload;
        if (state.isSuccess === true) {
          toast.success("Product Updated Cart Successfully!");
        }
      })
      .addCase(updateProductFromCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error("Sorry Something Went Wrong!");
        }
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.UpdateUserProfile = action.payload;

        console.log(action.payload);
        let currentUser = JSON.parse(localStorage.getItem("user"));
        let newUserData = {
          _id: currentUser?._id,
          token: currentUser?.token,
          firstName: action?.payload?.firstName,
          lastName: action?.payload?.lastName,
          email: action?.payload?.email,
          mobile: action?.payload?.mobile,
        };

        localStorage.setItem("user", JSON.stringify(newUserData));
        state.user = newUserData;
        toast.info("Your Profile has been Updated!");
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error("Sorry Something Went Wrong!");
        }
      })
      .addCase(forgetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.UserForgetPassword = action.payload;
        if (state.isSuccess === true) {
          toast.info("Check Your Email");
        }
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error("Sorry Something Went Wrong!");
        }
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.UserResetPassword = action.payload;
        if (state.isSuccess === true) {
          toast.info("Your Password has been Reset it!");
        }
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error("Sorry Something Went Wrong!");
        }
      })
      .addCase(CreateOder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CreateOder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.UserCreateOrder = action.payload;
        if (state.isSuccess === true) {
          toast.info("Congratulation Your Order has been Submited!");
        }
      })
      .addCase(CreateOder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getOders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.UserGetMyOrder = action.payload;
      })
      .addCase(getOders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUserCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedCart = action.payload;
      })
      .addCase(deleteUserCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(subcribe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(subcribe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.subcribeCreate = action.payload;
        state.message = "Your Email has been Subcribe"
      })
      .addCase(subcribe.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(resetState, () => initialState);
  },
});

export default userSlice.reducer;

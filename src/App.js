import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import OurStore from "./pages/OurStore";
// import Blog from "./pages/Blog";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
// import ResetPassword from "./pages/ResetPassword";
// import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsCondition from "./pages/TermsCondition";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import { PrivateRoutes } from "./routing/PrivateRoute";
import { OpenRoutes } from "./routing/OpenRoute";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="product"
              element={
                <PrivateRoutes>
                  <OurStore />
                </PrivateRoutes>
              }
            />
            {/* <Route path="blogs" element={<Blog />} /> */}
            {/* <Route path="blog/:id" element={<SingleBlog />} /> */}
            <Route
              path="cart"
              element={
                <PrivateRoutes>
                  <Cart />
                </PrivateRoutes>
              }
            />
            <Route
              path="checkout"
              element={
                <PrivateRoutes>
                  <CheckOut />
                </PrivateRoutes>
              }
            />
            <Route
              path="product/:id"
              element={
                <PrivateRoutes>
                  <SingleProduct />
                </PrivateRoutes>
              }
            />

            <Route
              path="wishlist"
              element={
                <PrivateRoutes>
                  <WishList />
                </PrivateRoutes>
              }
            />
            <Route
              path="my-profile"
              element={
                <PrivateRoutes>
                  <Profile />
                </PrivateRoutes>
              }
            />
            <Route
              path="my-orders"
              element={
                <PrivateRoutes>
                  <Orders />
                </PrivateRoutes>
              }
            />
            <Route
              path="login"
              element={
                <OpenRoutes>
                  <Login />
                </OpenRoutes>
              }
            />
            <Route
              path="signup"
              element={
                <OpenRoutes>
                  <SignUp />
                </OpenRoutes>
              }
            />
            <Route path="forgot-password" element={<ForgetPassword />} />
            {/* <Route path="reset-password/:token" element={<ResetPassword />} /> */}
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="terms-condition" element={<TermsCondition />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import { Link, json, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import WatchImg from "../images/watch.jpg";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
// import { Country, State, City } from "country-state-city";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import {
  CreateOder,
  getToCart,
  deleteUserCart,
  resetState
} from "../features/users/userSlice";

const checkOutSchema = yup.object({
  firstName: yup.string().required("First name is Required"),
  lastName: yup.string().required("Last name is Required"),
  address: yup.string().required("Address is Required"),
  state: yup.string().required("State is Required"),
  city: yup.string().required("City is Required"),
  country: yup.string().required("Country is Required"),
  other: yup.string().required("Apartment Sui is Required"),
  pincode: yup.string().required("PinCode is Required"),
});

const CheckOut = () => {
  const authState = useSelector((state) => state?.auth?.user);
  // console.log(authState);
  const authStateData = useSelector((state) => state?.auth);
  console.log(authStateData);
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [cartProductState, setCartProductState] = useState([]);
  const navigate = useNavigate();

  // console.log(cartState);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index]?.quantity) * cartState[index]?.price;
    }
    setTotalAmount(sum);
  }, [cartState]);

  useEffect(() => {
    let item = [];
    for (let index = 0; index < cartState?.length; index++) {
      item.push({
        product: cartState[index]?.productId?._id,
        quantity: cartState[index]?.quantity,
        color: cartState[index]?.color?._id,
        price: cartState[index]?.price,
      });
    }

    setCartProductState(item);
  }, [cartState]);

  const getTokenFromLocalStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage?.token : ""
      }`,
      Accept: "application/json",
    },
  };

  useEffect(() => {
    dispatch(getToCart(config2));
  }, []);

  // use formik here
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      city: "",
      country: "",
      other: "",
      pincode: "",
    },

    validationSchema: checkOutSchema,
    onSubmit: (values) => {
      setShippingInfo(values);
      console.log(values);
      localStorage.setItem("address", JSON.stringify(values));

      setTimeout(() => {
        checkOutHandler();
      }, 300);
      console.log("Address are submited in local storage");
    },
  });

  function checkOutHandler() {
    dispatch(
      CreateOder({
        shippingInfo: JSON.parse(localStorage.getItem("address")),
        orderItems: cartProductState,
        totalPrice: totalAmount,
        totalPriceAfterDiscount: totalAmount,
      })
    );

    dispatch(deleteUserCart(config2));
    localStorage.removeItem("address");
    dispatch(resetState())
  }

  useEffect(() => {
    if (
      authStateData?.UserCreateOrder?.order !== null &&
      authStateData?.UserCreateOrder?.success === true
    ) {
      navigate("/my-orders");
    }
  }, [authStateData]);

  return (
    <>
      <Meta title="CheckOut" />
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Emart</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item ">
                    <Link to="/cart" className="text-dark total-price">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /&nbsp;
                  <li
                    className="breadcrumb-item active total"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item total active">Shipping</li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item active total"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="total">Contact Information</h4>
              <p className="user-details total">
                {authState?.firstName + " " + authState?.lastName} (
                {authState?.email})
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select
                    name="country"
                    className="form-control form-select"
                    id="country"
                    value={formik.values.country}
                    onChange={formik.handleChange("country")}
                    onBlur={formik.handleBlur("country")}
                  >
                    <option value="Pakistan">Pakistan</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Pakistan">Pakistan</option>
                    {/* {Country.getAllCountries()?.map((item, index) => (
                      <option value={item.flag} selected key={index}>
                        {item.name}
                      </option>
                    ))} */}
                  </select>
                  <div className="text-danger">
                    {formik.touched.country && formik.errors.country}
                  </div>
                </div>

                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange("firstName")}
                    onBlur={formik.handleBlur("firstName")}
                    placeholder="First Name"
                  />
                  <div className="text-danger">
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange("lastName")}
                    onBlur={formik.handleBlur("lastName")}
                    placeholder="Last Name"
                  />
                  <div className="text-danger">
                    {formik.touched.lastName && formik.errors.lastName}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                    placeholder="Address"
                  />
                  <div className="text-danger">
                    {formik.touched.address && formik.errors.address}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apartment, Sui etc"
                    name="other"
                    value={formik.values.other}
                    onChange={formik.handleChange("other")}
                    onBlur={formik.handleBlur("other")}
                  />
                  <div className="text-danger">
                    {formik.touched.other && formik.errors.other}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    name="city"
                    values={formik.values.city}
                    onChange={formik.handleChange("city")}
                    onBlur={formik.handleBlur("city")}
                  />
                  <div className="text-danger">
                    {formik.touched.city && formik.errors.city}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select
                    name="state"
                    className="form-control form-select"
                    id="state"
                    value={formik.values.state}
                    onChange={formik.handleChange("state")}
                    onBlur={formik.handleBlur("state")}
                  >
                    <option value="Sindh">Sindh</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Peshawar">Peshawar</option>
                    {/* {State.getAllStates()?.map((item, index) => (
                      <option value={item.name} selected key={index}>
                        {item.name}
                      </option>
                    ))} */}
                  </select>
                  <div className="text-danger">
                    {formik.touched.state && formik.errors.state}
                  </div>
                </div>

                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Zip Code"
                    name="pincode"
                    value={formik.values.pincode}
                    onChange={formik.handleChange("pincode")}
                    onBlur={formik.handleBlur("pincode")}
                  />
                  <div className="text-danger">
                    {formik.touched.pincode && formik.errors.pincode}
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Return To Cart
                    </Link>
                    <Link to="/cart" className="button">
                      Continue To Shipping
                    </Link>
                    <button type="submit" className="button">
                      Place Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              {cartState &&
                cartState?.map((item, index) => (
                  <div
                    key={index}
                    className="d-flex gap-10 mb-2 align-items-center"
                  >
                    <div className="w-75 d-flex gap-10">
                      <div className="w-25 position-relative">
                        <span
                          className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                          style={{ top: "-10px", right: "2px" }}
                        >
                          {item?.quantity}
                        </span>
                        <img
                          src={
                            item?.productId?.images?.[0]?.url
                              ? item?.productId?.images?.[0]?.url
                              : WatchImg
                          }
                          alt="watch"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h5 className="total-price">
                          {item?.productId?.title}
                        </h5>
                        <p className="total-price">{item?.color?.title}</p>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="total">
                        $ {item?.price * item?.quantity}
                      </h5>
                    </div>
                  </div>
                ))}
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">SubTotal</p>
                <p className="total-price">
                  $ {totalAmount ? totalAmount : "0"}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 5</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <p className="total-price">
                $ {totalAmount ? totalAmount + 5 : "0"}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CheckOut;

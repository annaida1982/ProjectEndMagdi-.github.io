import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumbs from "../components/BreadCrumbs";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getOders } from "../features/users/userSlice";

const Orders = () => {
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

  const dispatch = useDispatch();
  const orderState = useSelector((state) => state?.auth?.UserGetMyOrder);
  const orderLoading = useSelector((state) => state?.auth);

  console.log(orderState);
  useEffect(() => {
    dispatch(getOders(config2));
  }, [dispatch]);

  console.log(orderState);

  return (
    <>
      <Meta title="My Orders" />
      <BreadCrumbs title="My Orders" />

      {orderLoading?.isLoading ? (
        <div className="text-center" style={{height:"50vh"}} >
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        <Container class1="cart-wrapper home-wrapper-2 py-5 d-flex">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-3">
                  <h5>Order Id</h5>
                </div>
                <div className="col-3">
                  <h5>Total Amount</h5>
                </div>
                <div className="col-3">
                  <h5>Total Amount after Discount</h5>
                </div>
                <div className="col-3">
                  <h5>Status</h5>
                </div>
              </div>
            </div>
            {/* <div className="col-12">
            <div className="row">
              <div className="col-3">
                <p>Order Id</p>
              </div>
              <div className="col-3">
                <p>Total Amount</p>
              </div>
              <div className="col-3">
                <p>Total Amount after Discount</p>
              </div>
              <div className="col-3">
                <p>Status</p>
              </div>
              <div className="col-12"></div>
            </div>
          </div> */}
            <div className="col-12 mt-3">
              {orderState &&
                orderState?.orders?.map((item, index) => (
                  <div className="row bg-warning pt-3 my-3" key={index}>
                    <div className="col-3">
                      <p>{item?._id}</p>
                    </div>
                    <div className="col-3">
                      <p>{item?.totalPrice}</p>
                    </div>
                    <div className="col-3">
                      <p>{item?.totalPriceAfterDiscount}</p>
                    </div>
                    <div className="col-3">
                      <p>{item?.orderStatus}</p>
                    </div>
                    <div className="col-12">
                      <div
                        className="row p-3"
                        style={{ backgroundColor: "black" }}
                      >
                        <div className="col-3">
                          <p className="text-white">Product Name</p>
                        </div>
                        <div className="col-3">
                          <p className="text-white">Quantity</p>
                        </div>
                        <div className="col-3">
                          <p className="text-white">Price</p>
                        </div>
                        <div className="col-3">
                          <p className="text-white">Color</p>
                        </div>
                      </div>
                      {item?.orderItems?.map((i, index) => (
                        <div className="col-12" key={index}>
                          <div
                            className="row p-3"
                            style={{ backgroundColor: "black" }}
                          >
                            <div className="col-3">
                              <p className="text-white">{i?.product?.title}</p>
                            </div>
                            <div className="col-3">
                              <p className="text-white">{i?.quantity}</p>
                            </div>
                            <div className="col-3">
                              <p className="text-white">{i?.price}</p>
                            </div>
                            <div className="col-3">
                              <ul className="colors ps-0">
                                <li style={{ backgroundColor: i?.color }}></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Orders;

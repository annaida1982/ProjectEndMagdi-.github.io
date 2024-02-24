import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumbs from "../components/BreadCrumbs";
import WatchImg from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  getToCart,
  deleteProductFromCart,
  updateProductFromCart,
} from "../features/users/userSlice";
const Cart = () => {
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

  const [productUpdateDetail, setProductUpdateDetail] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const userCartState = useSelector((state) => state?.auth?.cartProducts);
  console.log(userCartState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToCart(config2));
  }, []);

  console.log("totalAmount", totalAmount);

  useEffect(() => {
    if (productUpdateDetail !== null) {
      dispatch(
        updateProductFromCart({
          cartItemId: productUpdateDetail?.cartItemId,
          quantity: productUpdateDetail?.quantity,
          config2: config2,
        })
      );
      setTimeout(() => {
        dispatch(getToCart(config2));
      }, 100);
    }
  }, [productUpdateDetail]);

  // delete cart
  const deleteACartProduct = (id) => {
    dispatch(deleteProductFromCart({ id: id, config2: config2 }));
    setTimeout(() => {
      dispatch(getToCart(config2));
    }, 100);
  };

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < userCartState?.length; index++) {
      sum =
        sum +
        Number(userCartState[index]?.quantity) * userCartState[index]?.price;
    }
    setTotalAmount(sum);
  }, [userCartState]);
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumbs title="Cart" />

      {userCartState?.length > 0 ? (
        <>
          <Container class1="cart-wrapper home-wrapper-2 py-5">
            <div className="row">
              <div className="col-12">
                <div className=" cart-header py-3 d-flex justify-content-between align-items-center">
                  <h4 className="cart-col-1">Product</h4>
                  <h4 className="cart-col-2">Price</h4>
                  <h4 className="cart-col-3">Quantity</h4>
                  <h4 className="cart-col-4">Total</h4>
                </div>
                {/*  */}

                {userCartState &&
                  userCartState?.map((item, key) => (
                    <div
                      key={key}
                      className=" cart-data mb-2 py-3 d-flex justify-content-between align-items-center"
                    >
                      <div className="cart-col-1 gap-15 d-flex align-items-center">
                        <div className="w-25">
                          <img
                            src={
                              item?.productId?.images[0]?.url
                                ? item?.productId?.images[0]?.url
                                : WatchImg
                            }
                            alt="watch"
                            className="img-fluid"
                          />
                        </div>
                        <div className="w-75">
                          <h5>{item?.productId?.title}</h5>
                          {/* <p>Size:</p> */}
                          <p className="d-flex gap-3">
                            Color:{" "}
                            <ul className="colors ps-0">
                              <li
                                style={{
                                  backgroundColor: item?.color?.title,
                                  cursor: "pointer",
                                }}
                              ></li>
                            </ul>
                          </p>
                        </div>
                      </div>
                      <div className="cart-col-2">
                        <h5 className="price">$ {item?.price}</h5>
                      </div>
                      <div className="cart-col-3 d-flex align-items-center gap-15">
                        <div>
                          <input
                            type="number"
                            name={"quantity" + item?._id}
                            id={"cart" + item?._id}
                            className="form-control"
                            min={1}
                            max={10}
                            value={item?.quantity}
                            onChange={(e) =>
                              setProductUpdateDetail({
                                cartItemId: item?._id,
                                quantity: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <AiFillDelete
                            onClick={() => deleteACartProduct(item?._id)}
                            className="fs-5 text-danger "
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      </div>
                      <div className="cart-col-4">
                        <h5 className="price">
                          $ {item?.price * item?.quantity}
                        </h5>
                      </div>
                    </div>
                  ))}

                {/*  */}
                {/* <div className=" cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={WatchImg} alt="watch" className="img-fluid" />
                </div>
                <div className="w-75">
                  <h5>GGFFF</h5>
                  <p>Size:</p>
                  <p>Color:</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 100</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="form-control"
                    min={1}
                    max={10}
                  />
                </div>
                <div>
                  <AiFillDelete
                    className="fs-5 text-danger "
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$ 100</h5>
              </div>
            </div> */}
              </div>
              {/*  */}
              <div className="col-12 py-2 mt-4">
                <div className="d-flex justify-content-between align-items-baseline">
                  <Link to="/product" className="button">
                    Continue To Shopping
                  </Link>
                  {(totalAmount !== null || totalAmount !== 0) && (
                    <div className="d-flex flex-column align-items-end">
                      <h4>SubTotal: ${totalAmount ? totalAmount : 0}</h4>
                      <p>Taxes and Shipping calculated at checkout</p>
                      <Link to="/checkout" className="button">
                        CheckOut
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <h3 style={{color:"red",fontSize:"35px"}}>No Product 🛒</h3>
        </div>
      )}
    </>
  );
};

export default Cart;

import React, { useState, useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumbs from "../components/BreadCrumbs";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  addToRating,
  getSingleProduct,
  getAllProducts,
} from "../features/products/productSlice";
import { toast } from "react-toastify";
import { addProToCart, getToCart } from "../features/users/userSlice";

const SingleProduct = () => {
  const [color, setColor] = useState(null);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [popularProduct, setPopularProduct] = useState([]);

  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  const getProductId = location.pathname.split("/")[2];
  console.log(getProductId);
  const dispatch = useDispatch();
  const productState = useSelector((state) => state?.product?.singleproduct);
  const productsState = useSelector((state) => state?.product?.product);
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  console.log(productsState);

  useEffect(() => {
    dispatch(getSingleProduct(getProductId));
    dispatch(getToCart());
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (getProductId === cartState[index]?.productId?._id) {
        setAlreadyAdded(true);
      }
    }
  }, []);

  useEffect(() => {
    let data = [];
    for (let index = 0; index < productsState?.length; index++) {
      const element = productsState[index];
      if (element?.tags?.[0] === "popular") {
        data.push(element);
      }
      setPopularProduct(data);
    }
  }, [productsState, productState]);

  console.log(popularProduct);

  const uploadCart = () => {
    if (color === null) {
      toast.error("Please Choose Color");
      return false;
    } else {
      dispatch(
        addProToCart({
          productId: productState?._id,
          quantity,
          color,
          price: productState?.price,
        })
      );
      setTimeout(() => {
        dispatch(getSingleProduct(getProductId));
      }, 100);
    }
  };

  const removecartFromProduct = () => {};

  const props = {
    width: 150,
    height: 300,
    zoomWidth: 600,
    img: productState?.images?.[0]?.url
      ? productState?.images?.[0]?.url
      : "https://7star.pk/wp-content/uploads/2022/06/Citizen10.jpg",
  };

  const [orderedProduct, setOrderedProduct] = useState(true);

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const [star, setStar] = useState(null);
  const [comment, setComment] = useState(null);

  const addRatingProduct = () => {
    if (star === null) {
      toast.error("Please add start rating");
      return false;
    } else if (comment === null) {
      toast.error("Please Write Review About the product.");
      return false;
    } else {
      dispatch(
        addToRating({ star: star, comment: comment, prodId: getProductId })
      );
    }
  };

  return (
    <>
      <Meta title={productState?.title} />
      <BreadCrumbs title={productState?.title} />

      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex d-flex flex-wrap gap-15">
              {productState?.images?.map((item, index) => (
                <div key={index}>
                  <img
                    src={
                      item?.url
                        ? item?.url
                        : "https://7star.pk/wp-content/uploads/2022/06/Citizen10.jpg"
                    }
                    alt={item?.title}
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{productState?.title}</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ {productState?.price}</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={productState?.totalrating}
                    edit="false"
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 Reviews)</p>
                </div>
                <a href="#review" className="review">
                  Write a Review
                </a>
              </div>
              <div className=" py-3">
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Watch</p>
                </div>
                {/* <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">{productState?.brand}</p>
                </div> */}
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">{productState?.category}</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">{productState?.tags?.[0]}</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Availablity :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex flex-column gap-10 mb-3 mt-2">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className=" text-dark border-1 bg-white border-secondary border py-0 px-1">
                      S
                    </span>
                    <span className=" text-dark border-1 bg-white border-secondary border py-0 px-1">
                      M
                    </span>
                    <span className=" text-dark border-1 bg-white border-secondary border py-0 px-1">
                      XL
                    </span>
                    <span className=" text-dark border-1 bg-white border-secondary border py-0 px-1">
                      XXL
                    </span>
                  </div>
                </div>
                {alreadyAdded === false && (
                  <>
                    {" "}
                    <div className="d-flex flex-column gap-10 mb-3 mt-2">
                      <h3 className="product-heading">Colors :</h3>
                      <Color
                        setColor={setColor}
                        colorData={productState?.color}
                      />
                    </div>
                  </>
                )}

                <div className="d-flex align-items-center flex-row gap-15 mt-2">
                  {alreadyAdded === false && (
                    <>
                      <h3 className="product-heading">Quantity :</h3>
                      <div>
                        <input
                          type="number"
                          name=""
                          id=""
                          style={{ width: "70px" }}
                          min={1}
                          max={10}
                          className="form-control"
                          onChange={(e) => setQuantity(e.target.value)}
                          value={quantity}
                        />
                      </div>
                    </>
                  )}
                  <div
                    className={
                      alreadyAdded
                        ? "ms-0"
                        : "ms-5" + `d-flex align-items-center gap-30 ms-5}`
                    }
                  >
                    <button
                      type="button"
                      className="button border-0"
                      onClick={() => {
                        alreadyAdded
                          ? navigate("/cart")
                          : uploadCart(productState?._id);
                      }}
                    >
                      {alreadyAdded ? "Go To Cart" : "Add To Cart"}
                    </button>
                    {/* <button className="button signup">Buy It Now</button> */}
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 py-4">
                  {/* <div className="d-flex align-items-center gap-15">
                    <a href="">
                      {" "}
                      <TbGitCompare className="fs-5 me-2" />
                      Add To Compare
                    </a>
                  </div> */}
                  <div className="d-flex align-items-center gap-15">
                    <a style={{cursor:"pointer"}}>
                      <AiOutlineHeart className="fs-5 me-2" />
                      Addto Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-column my-3 gap-10 my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br />
                    We ship all Us domestic orders within{" "}
                    <b>5-10 business days!</b>
                  </p>
                </div>
                {/*  */}
                <div className="d-flex align-items-center gap-10 my-3">
                  <h3 className="product-heading">Product Link:</h3>
                  <a
                    href="javascript:void(0)"
                    onClick={() => copyToClipboard(window.location.href)}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description: </h4>
            <div className="bg-white p-3">
              <p
                dangerouslySetInnerHTML={{ __html: productState?.description }}
              ></p>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="reviews-wrapper pb-5 home-wrapper-2">
        <div className="row">
          <h3 id="review">Reviews</h3>
          <div className="col-12">
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4>Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit="false"
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">
                      Based on {productState?.ratings?.length} Reviews
                    </p>
                  </div>
                </div>

                {orderedProduct && (
                  <div>
                    <a href="" className="text-dark text-decoration-underline">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>

                <div>
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit="true"
                    activeColor="#ffd700"
                    onChange={(e) => setStar(e)}
                  />
                </div>
                <div>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="form-control w-100"
                    placeholder="Comments"
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className="button"
                    type="submit"
                    onClick={addRatingProduct}
                  >
                    Submit Review
                  </button>
                </div>
              </div>

              <div className="reviews mt-4">
                {productState &&
                  productState?.ratings?.map((item, index) => (
                    <div className="review" key={index}>
                      <div className="d-flex gap-10 align-items-center">
                        <h6 className="mb-0">Fabiha</h6>
                        <ReactStars
                          count={5}
                          size={24}
                          value={item?.star}
                          edit="false"
                          activeColor="#ffd700"
                        />
                      </div>
                      <p className="mt-3">{item?.comment}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3>Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard data={popularProduct} />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;

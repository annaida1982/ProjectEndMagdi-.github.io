import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
// import WatchImg from "../images/watch.jpg";
import WishImg from "../images/wish.svg";
import ProductCompareImg from "../images/prodcompare.svg";
import ViewImg from "../images/view.svg";
import AddCardImg from "../images/add-cart.svg";
import SmartWatchImg from "../images/smartwatch.avif";
import { useDispatch } from "react-redux";
import { addToWishList } from "../features/products/productSlice";

export default function ProductCard(props) {
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

  // const stateData = useSelector((state) => state);
  const dispatch = useDispatch();
  const location = useLocation();
  const { grid, data } = props;

  const AddToWish = (id) => {
    dispatch(addToWishList(id));
  };

  return (
    <>
      {data &&
        data?.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className={`${
                location.pathname == "/product" ? `gr-${grid}` : "col-3"
              }`}
            >
              <div className="prodct-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <button
                    className="border-0 bg-transparent"
                    onClick={(e) => AddToWish(item?._id)}
                  >
                    <img src={WishImg} alt="wish" />
                  </button>
                </div>
                <div className="product-image">
                  <img
                    src={item?.images[0]?.url}
                    alt="watch"
                    className="img-fluid mx-auto"
                    width={160}
                  />
                  <img
                    src={SmartWatchImg}
                    alt="watch"
                    className="img-fluid mx-auto"
                    width={160}
                  />
                </div>
                <div className="product-details">
                  <h6 className="brand">{item?.brand}</h6>
                  <h5 className="product-title">{item?.title}</h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value={item?.totalrating.toString()}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p
                    className={`description ${
                      grid === 12 ? "d-block" : "d-none"
                    }`}
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></p>
                  <p className="price">${item?.price}</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-15">
                    {/* <button className="border-0 bg-transparent">
                      <img src={ProductCompareImg} alt="add" />
                    </button> */}
                    <Link
                      to={`/product/${item?._id}`}
                      className="border-0 bg-transparent"
                    >
                      <img src={ViewImg} alt="add" />
                    </Link>
                    {/* <button className="border-0 bg-transparent">
                      <img src={AddCardImg} alt="add" />
                    </button> */}
                  </div>
                </div>
              </div>
            </div>

            {/* <div
            className={`${
              location.pathname == "/product" ? `gr-${grid}` : "col-3"
            }`}
          >
            <Link
              to={`${
                location.pathname == "/"
                  ? "/product/:id"
                  : location.pathname == "/product/:id"
                  ? "/product/:id"
                  : ":id"
              }`}
              className="prodct-card position-relative"
            >
              <div className="wishlist-icon position-absolute">
                <button className="border-0 bg-transparent">
                  <img src={WishImg} alt="wish" />
                </button>
              </div>
              <div className="product-image">
                <img src={WatchImg} alt="watch" className="img-fluid" />
                <img src={SmartWatchImg} alt="watch" className="img-fluid" />
              </div>
              <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className="product-title">
                  Kids headphones bulk 10 pack multi colored for students
                </h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={3}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <p className="price">$100.00</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-transparent">
                    <img src={ProductCompareImg} alt="add" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img src={ViewImg} alt="add" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img src={AddCardImg} alt="add" />
                  </button>
                </div>
              </div>
            </Link>
          </div> */}
          </React.Fragment>
        ))}
    </>
  );
}

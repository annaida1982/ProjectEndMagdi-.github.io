import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumbs from "../components/BreadCrumbs";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../features/users/userSlice";
import { addToWishList } from "../features/products/productSlice";
import { toast } from "react-toastify";

export default function WishList() {
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
  useEffect(() => {
    getwishlistfromDb();
  }, []);

  const getwishlistfromDb = () => {
    dispatch(getWishlist(config2));
  };

  const wishlistState = useSelector(
    (state) => state?.auth?.getWIshlist?.wishlist
  );
  const removeFromWishlist = (id) => {
    dispatch(addToWishList(id));
    setTimeout(() => {
      dispatch(getWishlist(config2));
      toast.success("Deleted!");
    }, 200);
  };

  return (
    <>
      <Meta title="WishList" />
      <BreadCrumbs title="Our WishList" />

      <Container class1="wishlist-wrapper py-5 home-wrapper-2">
        <div className="row">
          {wishlistState && wishlistState?.length === 0 && (
            <div className="text-center fs-3">NO DATA</div>
          )}

          {wishlistState &&
            wishlistState?.map((item) => (
              <React.Fragment key={item?._id}>
                <div className="col-3">
                  <div className="wishlist-card position-relative">
                    <img
                      onClick={() => removeFromWishlist(item?._id)}
                      src="images/cross.svg"
                      alt="cross"
                      className="position-absolute cross img-fluid"
                    />
                    <div className="wishlist-card-image bg-white">
                      <img
                        src={
                          item?.images[0]?.url
                            ? item?.images[0]?.url
                            : "images/watch.jpg"
                        }
                        alt="watch"
                        className="img-fluid d-block mx-auto"
                      />
                    </div>
                    <div className=" py-3">
                      <h5 className="title">{item?.title}</h5>
                      <h6 className="price">$ {item?.price}</h6>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </Container>
    </>
  );
}

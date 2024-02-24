import React, { useEffect } from "react";
// import Marquee from "react-fast-marquee";
import { Link, useNavigate } from "react-router-dom";
// import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
import WishImg from "../images/wish.svg";
import ProductCompareImg from "../images/prodcompare.svg";
import ViewImg from "../images/view.svg";
import AddCardImg from "../images/add-cart.svg";
import SmartWatchImg from "../images/smartwatch.avif";
import { addToWishList } from "../features/products/productSlice";
import ReactStars from "react-rating-stars-component";

export default function Home() {
  const productState = useSelector((state) => state?.product?.product);
  console.log(productState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    dispatch(getAllProducts());
  };

  const AddToWish = (id) => {
    dispatch(addToWishList(id));
  };

  return (
    <>
      {/* first section */}
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad 513+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button">Buy Now</Link>
              </div>
            </div>
          </div>
          {/* first section second part */}
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              {/* One */}
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>Laptops Max</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              {/* two */}
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>15% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              {/* three */}
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              {/* four */}
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>FREE ENGRAVING</h4>
                  <h5>AirPods Max</h5>
                  <p>
                    From $999.00 <br />
                    or $41.62/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* second section */}
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div key={j} className="d-flex align-items-center gap-15">
                    <img src={i?.image} alt={i?.title} />
                    <div>
                      <h6>{i?.title}</h6>
                      <p className="mb-0">{i?.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* third section */}

      <Container class1="home-wrapper-2 py-5">
        <div className="col-12">
          <div className="categories d-flex align-items-center justify-content-between flex-wrap">
            {/* one */}
            <div className="d-flex gap align-items-center">
              <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
              </div>
              <img src="images/camera.jpg" alt="camera" />
            </div>
            {/* two */}
            <div className="d-flex gap align-items-center">
              <div>
                <h6>Music & Gaming</h6>
                <p>10 Items</p>
              </div>
              <img src="images/camera.jpg" alt="camera" />
            </div>
            {/* three */}
            <div className="d-flex gap align-items-center">
              <div>
                <h6>Smart Tv</h6>
                <p>10 Items</p>
              </div>
              <img src="images/tv.jpg" alt="camera" />
            </div>
            {/* four */}
            <div className="d-flex gap align-items-center">
              <div>
                <h6>Smart Watches</h6>
                <p>5 Items</p>
              </div>
              <img src="images/headphone.jpg" alt="camera" />
            </div>
            {/* five */}
            <div className="d-flex gap align-items-center">
              <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
              </div>
              <img src="images/camera.jpg" alt="camera" />
            </div>
            {/* six */}
            <div className="d-flex gap align-items-center">
              <div>
                <h6>Music & Gaming</h6>
                <p>10 Items</p>
              </div>
              <img src="images/camera.jpg" alt="camera" />
            </div>
            {/* seven */}
            <div className="d-flex gap align-items-center">
              <div>
                <h6>Smart Tv</h6>
                <p>10 Items</p>
              </div>
              <img src="images/tv.jpg" alt="camera" />
            </div>
            {/* eight */}
            <div className="d-flex gap align-items-center">
              <div>
                <h6>Smart Watches</h6>
                <p>5 Items</p>
              </div>
              <img src="images/headphone.jpg" alt="camera" />
            </div>
          </div>
        </div>
      </Container>

      {/* same five section */}

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          {productState &&
            productState.map((item, index) => {
              if (item?.tags?.[0] === "featured") {
                return (
                  <div className="col-3">
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
                          src={item?.images?.[0]?.url}
                          alt="watch"
                          className="img-fluid mx-auto"
                          width={160}
                        />
                        <img
                          src={SmartWatchImg}
                          alt="watch"
                          className="img-fluid mx-auto w-100"
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

                        <p className="price">${item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          {/* <button className="border-0 bg-transparent">
                            <img src={ProductCompareImg} alt="add" />
                          </button> */}
                          <button className="border-0 bg-transparent">
                            <img
                              onClick={() => navigate(`/product/${item?._id}`)}
                              src={ViewImg}
                              alt="add"
                            />
                          </button>
                          {/* <button className="border-0 bg-transparent">
                            <img src={AddCardImg} alt="add" />
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>

      {/* famous wrapper */}
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row d-flex justify-content-evenly">
          {/* one */}
          {/* <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-watch1.jpg"
                alt="watch"
                className="img-fluid"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From s399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div> */}
          {/* two */}
          <div className="col-3">
            <div className="card" style={{ width: "20rem",height:"26rem" }}>
              <img
                className="card-img-top img-fluid py-3"
                src="https://rukminim2.flixcart.com/image/416/416/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70"
                alt="Card image cap"
              />
              <div className="card-body" style={{textAlign:"center"}}>
                <h5 className="card-title">HP Pavilion Plus Creator </h5>
                <p className="card-text text-black">
                  Now in Green From $999.00 or $41.62/mo. for 24 mo Footnote
                </p>
              </div>
            </div>
          </div>
          {/* three */}
          <div className="col-3">
            <div className="card" style={{ width: "20rem",height:"26rem" }}>
              <img
                className="card-img-top img-fluid py-3"
                src="https://rukminim2.flixcart.com/image/416/416/xif0q/computer/c/o/f/-original-imagp7pfpfw7vdky.jpeg?q=70"
                alt="Card image cap"
              />
              <div className="card-body" style={{textAlign:"center"}}>
                <h5 className="card-title">HP Pavilion Plus Creator </h5>
                <p className="card-text text-black">
                  Now in Green From $999.00 or $41.62/mo. for 24 mo Footnote
                </p>
              </div>
            </div>
          </div>
          {/* four */}
          <div className="col-3">
            <div className="card" style={{ width: "20rem",height:"26rem" }}>
              <img
                className="card-img-top img-fluid py-3"
                src="https://rukminim2.flixcart.com/image/416/416/xif0q/computer/u/u/k/-original-imagmxuravjcmdwu.jpeg?q=70"
                alt="Card image cap"
              />
              <div className="card-body" style={{textAlign:"center"}}>
                <h5 className="card-title">HP Pavilion Plus Creator </h5>
                <p className="card-text text-black">
                  Now in Green From $999.00 or $41.62/mo. for 24 mo Footnote
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* spcial section */}

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item?.tags?.[0] === "special") {
                return (
                  <SpecialProduct
                    key={index}
                    id={item?._id}
                    title={item?.title}
                    image={item?.images?.[0]?.url}
                    brand={item?.brand}
                    totalrating={item?.totalrating.toString()}
                    price={item?.price}
                    sold={item?.sold}
                    quantity={item?.quantity}
                  />
                );
              }
            })}
        </div>
      </Container>

      {/* same five section */}
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item?.tags?.[0] === "popular") {
                return (
                  <div className="col-3">
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
                          className="img-fluid mx-auto w-100"
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

                        <p className="price">${item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          {/* <button className="border-0 bg-transparent">
                            <img src={ProductCompareImg} alt="add" />
                          </button> */}
                          <button className="border-0 bg-transparent">
                            <img
                              onClick={() => navigate(`/product/${item?._id}`)}
                              src={ViewImg}
                              alt="add"
                            />
                          </button>
                          {/* <button className="border-0 bg-transparent">
                            <img src={AddCardImg} alt="add" />
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>

      {/* four section */}

      {/* <Container class1="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marque-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container> */}

      {/* five section */}

      {/* <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </Container> */}
    </>
  );
}

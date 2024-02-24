import React, { useState, useEffect } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";

export default function OurStore() {
  const productState = useSelector((state) => state?.product?.product);
  console.log("productState", productState);
  // const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [colors, setColors] = useState([]);

  // filter state
  const [category, setCategory] = useState(null);
  const [tag, setTag] = useState(null);
  // const [brand, setBrand] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [sort, setSort] = useState(null);


 

  useEffect(() => {
    // brand part
    // let newBrands = [];
    let newcategory = [];
    let newtag = [];
    let newColor = [];

    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      // newBrands.push(element?.brand);
      newcategory.push(element?.category);
      newtag.push(element?.tags);
      newColor.push(element?.color);
    }

    const singleArray = [].concat(...newtag);

    // setBrands(newBrands);
    setCategories(newcategory);
    setTags(singleArray);
    setColors(newColor);

    // console.log("singleArray", tag);
  }, [productState]);

  // console.log([...new Set(brands)]);
  // console.log([...new Set(categories)]);
  // console.log("tags", [...new Set(tags)]);
  // console.log("colors", [...new Set(colors)]);

  // console.log(productState?.length);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
  }, [sort,tag,category,minPrice,maxPrice]);

  const getProducts = () => {
    dispatch(getAllProducts({sort,tag,category,minPrice,maxPrice}));
  };
  const [grid, setGrid] = useState(4);
  console.log(sort)

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumbs title="Our Store" />

      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  {categories &&
                    [...new Set(categories)].map((item, index) => (
                      <li key={index} onClick={() => setCategory(item)}>
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput"
                      placeholder="To"
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <label htmlFor="floatingInput">To</label>
                  </div>
                </div>
              </div>
            </div>
            {/* FILTER */}
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex align-items-center flex-wrap gap-10">
                  {tags &&
                    [...new Set(tags)].map((item, index) => (
                      <span
                        className="badge bg-light text-secondary rounded-3 py-2 px-3 text-capitalize"
                        key={index}
                        onClick={() => setTag(item)}
                      >
                        {item}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            {/* filter */}
            {/* <div className="filter-card mb-3">
              <h3 className="filter-title">Brand Tags</h3>
              <div>
                <div className="product-tags d-flex align-items-center flex-wrap gap-10">
                  {brands &&
                    [...new Set(brands)].map((item, index) => (
                      <span
                        className="badge bg-light text-secondary rounded-3 py-2 px-3 text-capitalize"
                        key={index}
                        onClick={() => setBrand(item)}
                      >
                        {item}
                      </span>
                    ))}
                </div>
              </div>
            </div> */}

            {/*  */}
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name="sort_by"
                    id=""
                    className="form-control form-select"
                    defaultValue={"manual"}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="title">Alphabetically A-Z</option>
                    <option value="-title">Alphabetically Z-A</option>
                    <option value="price">Price, low to high</option>
                    <option value="-price">Price, high to low</option>
                    <option value="createdAt">Date, old to new</option>
                    <option value="-createdAt">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">
                    {productState && productState?.length > 0
                      ? productState?.length
                      : 0}
                    <span> Products</span>
                  </p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      src="images/gr4.svg"
                      alt="grid"
                      className="d-block img-fluid"
                      onClick={() => setGrid(3)}
                    />
                    <img
                      src="images/gr3.svg"
                      alt="grid"
                      className="d-block img-fluid"
                      onClick={() => setGrid(4)}
                    />
                    <img
                      src="images/gr2.svg"
                      alt="grid"
                      className="d-block img-fluid"
                      onClick={() => setGrid(6)}
                    />
                    <img
                      src="images/gr.svg"
                      alt="grid"
                      className="d-block img-fluid"
                      onClick={() => setGrid(12)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-List pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard
                  data={productState && productState ? productState : []}
                  grid={grid}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

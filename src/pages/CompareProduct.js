import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import Meta from "../components/Meta";
import Color from "../components/Color";
import Container from "../components/Container";

export default function CompareProduct() {
  return (
    <>
      <Meta title="Compare Product" />
      <BreadCrumbs title="Our Compare Product" />

      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          {/* part1  */}
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt=""
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5>
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet{" "}
                </h5>
                <h6 className="price mb-3">$ 100</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>InStock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* part2 */}
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt=""
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5>
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet{" "}
                </h5>
                <h6 className="price mb-3">$ 100</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>InStock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

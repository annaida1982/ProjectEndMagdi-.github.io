import React from "react";
import Meta from "../components/Meta";
import BreadCrumbs from "../components/BreadCrumbs";
import Container from "../components/Container";

const TermsCondition = () => {
  return (
    <>
      <Meta title="Terms Condition" />
      <BreadCrumbs title="Terms Condition" />

      <Container class1="policy-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </Container>
    </>
  );
};

export default TermsCondition;

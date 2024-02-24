import React from "react";
import Meta from "../components/Meta";
import BreadCrumbs from "../components/BreadCrumbs";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import SingleBlogImg from "../images/blog-1.jpg"
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Name" />
      <BreadCrumbs title="Dynamic Blog Name" />

      <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4"/>
                  Go Back To Blogs
                </Link>
                <h3>A Beautiful Sunday Morning</h3>
                <img
                  src={SingleBlogImg}
                  alt="blog"
                  className="img-fluid w-100 my-4"
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged
                </p>
              </div>
            </div>
          </div>
        </Container>
    </>
  );
};

export default SingleBlog;

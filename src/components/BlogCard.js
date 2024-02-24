import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard() {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="" />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec, 2022</p>
        <h5 className="title">A beautiful sunday morning</h5>
        <p className="desc">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout
        </p>
        <Link to="/blog/:id" className="button">Read More</Link>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import NewsImg from "../images/newsletter.png";
import { subcribe } from "../features/users/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

const loginSchema = yup.object({
  subcribe: yup.string().required("Subcribe is Required"),
});

export default function Footer() {
  const { isLoading, message, isSuccess } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      subcribe: "",
    },

    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(subcribe(values));
      // dispatch(loginUser(values));
    },
  });

  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={NewsImg} alt="news" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <form onSubmit={formik.handleSubmit} className="col-7">
              <div className="input-group">
                <input
                  value={formik.values.subcribe}
                  onChange={formik.handleChange("subcribe")}
                  onBlur={formik.handleBlur("subcribe")}
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address..."
                  aria-label="Your Email Address..."
                  aria-describedby="basic-addon2"
                />
                <button
                  className="input-group-text p-2"
                  id="basic-addon2"
                  type="submit"
                >
                   SubCribe
                </button>
              </div>
              {
                isSuccess === true ? <p style={{ color: "white", paddingTop: "5px" }}>{message}</p> : null
              }

              <div style={{ marginTop: "5px", color: "white" }}>
                {formik.touched.subcribe && formik.errors.subcribe}
              </div>
            </form>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact us</h4>
              <div>
                <address className="text-white fs-5">
                  phase 1, Plot 112 C, Commercial Area B <br /> Defence Housing
                  Authority Karachi <br /> PinCode: 24700
                </address>
                <a
                  href="tel: +92 3259224546"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +92 3259224546
                </a>
                <a
                  href="mailto:zeecodercraft121@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  zeecodercraft121@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a href="#" className="text-white">
                    <BsLinkedin className=" fs-5" />
                  </a>
                  <a href="#" className="text-white">
                    <BsGithub className=" fs-5" />
                  </a>
                  <a href="#" className="text-white">
                    <BsYoutube className=" fs-5" />
                  </a>
                  <a href="#" className="text-white">
                    <BsInstagram className=" fs-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column ">
                <Link className="text-white py-2 mb-1" to="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/refund-policy">
                  Refund Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/shipping-policy">
                  Shipping Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/terms-condition">
                  Terms & Conditions
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column ">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column ">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">HeadPhones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Emart
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

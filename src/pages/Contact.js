import React from "react";
import Meta from "../components/Meta";
import BreadCrumbs from "../components/BreadCrumbs";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from "../components/Container";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createContact } from "../features/contact/contactSlice";

const contactSchema = yup.object({
  name: yup.string().required("Name is Required"),
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  mobile: yup.string().default("").nullable().required("Mobile No is Required"),
  comment: yup.string().default("").nullable().required("Comment is Required"),
});

export default function Contact() {
  const {isLoading} = useSelector(state => state?.contact);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      comment: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      dispatch(
        createContact({
          name: values.name,
          email: values.email,
          mobile: values.mobile,
          comment: values.comment,
        })
      );
    },
  });
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumbs title="Our Contact" />

      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5711888367605!2d67.05267303830712!3d24.84433404599733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d10e921ba3b%3A0x3572771b45eccdb3!2szee%20coder%20craft!5e0!3m2!1sen!2s!4v1688998133039!5m2!1sen!2s"
              width="600"
              height="450"
              className="border-0 w-100"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between align-items-center">
              <div>
                <h3 className="contact-title mb-4">Contact Us</h3>
                <form
                  action=""
                  className="d-flex flex-column gap-20"
                  onSubmit={formik.handleSubmit}
                >
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                    />
                  </div>
                  <div className="text-danger">
                    {formik.touched.name && formik.errors.name}
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                    />
                  </div>
                  <div className="text-danger">
                    {formik.touched.email && formik.errors.email}
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile Number"
                      value={formik.values.mobile}
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                    />
                  </div>
                  <div className="text-danger">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="form-control w-100"
                      placeholder="Comments"
                      value={formik.values.comment}
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                    />
                  </div>
                  <div className="text-danger">
                    {formik.touched.comment && formik.errors.comment}
                  </div>
                  <div>
                    <button className="button" type="submit">
                      {isLoading ? "Loading" : "Submited"}
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title">Get in touch With Us</h3>
                <div className="py-4">
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center py-2">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        phase 1, Plot 112 C, Commercial Area B Defence Housing
                        Authority Karachi
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center py-2">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel: +92 3259224546">+92 3259224546</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center py-2">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:zeecodercraft121@gmail.com">
                        zeecodercraft121@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center py-2">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

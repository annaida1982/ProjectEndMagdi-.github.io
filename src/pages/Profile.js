import React, { useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../features/users/userSlice";
import { FiEdit } from "react-icons/fi";

const profileSchema = yup.object({
  firstName: yup.string().required("First name is Required"),
  lastName: yup.string().required("Last name is Required"),
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  mobile: yup.string().required("Mobile No is Required"),
});

const Profile = () => {
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




  const [edit, setEdit] = useState(true);
  const dispatch = useDispatch();
  const userState = useSelector((state) => state?.auth?.user);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: userState?.firstName,
      lastName: userState?.lastName,
      email: userState?.email,
      mobile: userState?.mobile,
    },

    validationSchema: profileSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(updateUserProfile({data:values,config2:config2}));
      setEdit(true)
    },
  });

  return (
    <>
      <BreadCrumbs title="My Profile" />
      <Meta title="My Profile" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Update Profile</h3>
              <FiEdit
                className="fs-3"
                style={{ cursor: "pointer" }}
                onClick={() => setEdit(false)}
              />
            </div>
          </div>
          <div className="col-12">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  First Name
                </label>
                <input
                  value={formik.values.firstName}
                  onChange={formik.handleChange("firstName")}
                  onBlur={formik.handleBlur("firstName")}
                  name="firstName"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  disabled={edit}
                />
                <div className="text-danger">
                  {formik.touched.firstName && formik.errors.firstName}
                </div>
              </div>

              <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Last Name
                </label>
                <input
                  value={formik.values.lastName}
                  onChange={formik.handleChange("lastName")}
                  onBlur={formik.handleBlur("lastName")}
                  name="lastName"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  disabled={edit}
                />
                <div className="text-danger">
                  {formik.touched.lastName && formik.errors.lastName}
                </div>
              </div>

              <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  disabled={edit}
                />
                <div className="text-danger">
                  {formik.touched.email && formik.errors.email}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" class="form-label">
                  Mobile
                </label>
                <input
                  value={formik.values.mobile}
                  onChange={formik.handleChange("mobile")}
                  onBlur={formik.handleBlur("mobile")}
                  name="mobile"
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  disabled={edit}
                />
                <div className="text-danger">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>
              </div>

              {edit === false && (
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              )}
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;

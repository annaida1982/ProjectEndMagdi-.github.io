import React from "react";
import Meta from "../components/Meta";
import BreadCrumbs from "../components/BreadCrumbs";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/users/userSlice";
import { useEffect } from "react";

const signUpSchema = yup.object({
  firstName: yup.string().required("First name is Required"),
  lastName: yup.string().required("Last name is Required"),
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  mobile: yup.string().required("Mobile No is Required"),
  password: yup.string().required("Password is Required"),
});

function SignUp() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state?.auth);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
    },

    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(registerUser(values));
    },
  });
  // useEffect(() => {
  //   if (authState?.createdUser !== null && authState?.isError === false) {
  //     navigate("/login");
  //   }
  // }, [authState]);

  return (
    <>
      <Meta title="Sign Up" />
      <BreadCrumbs title="Sign Up" />

      <Container class1="signup-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form
                action=""
                className="d-flex flex-column gap-15"
                onSubmit={formik.handleSubmit}
              >
                <CustomInput
                  id="firstName"
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange("firstName")}
                  onBlur={formik.handleBlur("firstName")}
                />
                <div className="text-danger">
                  {formik.touched.firstName && formik.errors.firstName}
                </div>

                <CustomInput
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="form-control"
                  value={formik.values.lastName}
                  onChange={formik.handleChange("lastName")}
                  onBlur={formik.handleBlur("lastName")}
                />

                <div className="text-danger">
                  {formik.touched.lastName && formik.errors.lastName}
                </div>

                <CustomInput
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />

                <div className="text-danger">
                  {formik.touched.email && formik.errors.email}
                </div>

                <CustomInput
                  id="mobile"
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="form-control"
                  value={formik.values.mobile}
                  onChange={formik.handleChange("mobile")}
                  onBlur={formik.handleBlur("mobile")}
                />
                <div className="text-danger">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>

                <CustomInput
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                <div className="text-danger">
                  {formik.touched.password && formik.errors.password}
                </div>

                <div>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SignUp;

import React from "react";
import Meta from "../components/Meta";
import BreadCrumbs from "../components/BreadCrumbs";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { forgetPassword } from "../features/users/userSlice";


const forgetSchema = yup.object({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
});

const ForgetPassword = () => {
   const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: forgetSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(forgetPassword(values));
    },
  });
  return (
    <>
      <Meta title="Forget Password" />
      <BreadCrumbs title="Forget Password" />

      <Container class1="forget-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center my-2">
                We Will Send you an email to reset your password
              </p>
              <form
                className="d-flex flex-column gap-15"
                onSubmit={formik.handleSubmit}
              >
                <CustomInput
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
                <div>
                <div className="text-danger">
                  {formik.touched.email && formik.errors.email}
                </div>
                  <div className="mt-3 d-flex flex-column justify-content-center align-items-center gap-15">
                    <button className="button border-0" type="submit">
                      Submit
                    </button>
                    <Link to="/login" className="a">
                      Cancel
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgetPassword;

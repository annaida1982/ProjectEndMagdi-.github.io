import React from "react";
import Meta from "../components/Meta";
import BreadCrumbs from "../components/BreadCrumbs";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useLocation } from "react-router-dom";
import { resetPassword } from "../features/users/userSlice";
import { useDispatch } from "react-redux";

const resetSchema = yup.object({
  password: yup.string().required("Password is Required"),
  // confirmPassword: yup.string().required("Confirm Password is Required"),
});

const ResetPassword = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const getToken = location.pathname.split("/")[2];
  console.log(getToken);
  const formik = useFormik({
    initialValues: {
      password: "",
    },

    validationSchema: resetSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(resetPassword({ token: getToken, password: values.password }));
    },
  });
  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrumbs title="Reset Password" />

      <Container class1="forget-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form
                className="d-flex flex-column gap-15"
                onSubmit={formik.handleSubmit}
              >
                <CustomInput
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  className="form-control"
                  placeholder="Password"
                />
                <div className="text-danger">
                  {formik.touched.password && formik.errors.password}
                </div>

                {/* <CustomInput
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  className="form-control mt-1"
                  placeholder="Confirm Password"
                />
                <div className="text-danger">
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword}
                </div> */}

                <div>
                  <div className="mt-3 d-flex flex-column justify-content-center align-items-center gap-15">
                    <button className="button border-0" type="submit">
                      OK
                    </button>
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

export default ResetPassword;

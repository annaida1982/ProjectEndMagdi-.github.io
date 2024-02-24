import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumbs from "../components/BreadCrumbs";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/users/userSlice";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),

  password: yup.string().required("Password is Required"),
});

const Login = () => {
  const navigate = useNavigate();
  const authState = useSelector((state) => state?.auth);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(loginUser(values));
    },
  });

  useEffect(() => {
    if (authState?.user !== null && authState?.isError === false) {
      navigate("/");
    }
  }, [authState]);

  return (
    <>
      <Meta title="LogIn" />
      <BreadCrumbs title="Our LogIn" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form
                  className="d-flex flex-column gap-15"
                  onSubmit={formik.handleSubmit}
                >
                  <CustomInput
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />

                  <div className="text-danger">
                    {formik.touched.email && formik.errors.email}
                  </div>

                  <CustomInput
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control mt-1"
                  />

                  <div className="text-danger">
                    {formik.touched.password && formik.errors.password}
                  </div>

                  <div>
                    <Link className="a" to="/forgot-password">
                      Forget Password
                    </Link>
                    <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                      <button type="submit" className="button border-0">
                        Login
                      </button>
                      <Link className="button signup" to="/signup">
                        SignUp
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

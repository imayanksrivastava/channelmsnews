import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// import './login.css';
import channelMSAPI from "../apis/channelmsApi";

const LoginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be 6 characters at minimum")
        .required("Password is required")
});

class Signup extends React.Component {
    onSubmit = (values, { setSubmitting }) => {
        channelMSAPI.post('users', {
            'name': values.name,
            'email': values.email,
            'password': values.password
        }).then(result => {
            if (result.status === 201) {
                this.props.onsignupSubmit(result.data.token);
            } else {
                console.log("Error from server");
            }
        }).catch(e => {
            console.log("Catch");
        });
        setSubmitting(false);
    }
    render() {
        return (
          <div>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginValidationSchema}
              onSubmit={this.onSubmit}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form>
                  <label htmlFor="name">Name</label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter your Full Name"
                  />
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className={`form-control ${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="invalid-feedback"
                  />

                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className={`form-control ${
                      touched.password && errors.password ? "is-invalid" : ""
                    }`, "btn-cms"}
                  />
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="invalid-feedback"
                  />

                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Please wait..." : "Signup"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        );
    }
}

export default Signup;
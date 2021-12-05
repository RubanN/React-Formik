import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("Form Data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

const OldYouForm = () => {
  //   console.log("visited", formik.touched);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form onSubmit={Formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage email="email" />
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage channel="channel" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default OldYouForm;

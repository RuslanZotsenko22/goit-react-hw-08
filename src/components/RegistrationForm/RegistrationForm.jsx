import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

import css from "./RegistrationForm.module.css";

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  email: Yup.string().email("Invalid format email!").required("Required"),

  password: Yup.string()
    .min(8, "Too Short!")
    .matches(/[a-z]/, "Must be a lowercase letter! ")
    .matches(/[0-9]/, "Must be a number! ")
    .required("Required"),
});

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // console.log("Registration values:", values);

    dispatch(
      register({
        name: values.username,
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm({
      values: {
        username: "",
        email: "",
        password: "",
      },
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegisterSchema}
    >
      <motion.div
      // initial={{ x: "-100vw" }}
      // animate={{ x: 0 }}
      // transition={{ type: "spring", stiffness: 50 }}
      >
        <Form className={css.form}>
          <label className={css.label}>Name</label>
          <Field className={css.field} type="text" name="username" />
          <ErrorMessage className={css.error} name="username" component="div" />

          <label className={css.label}>Email</label>
          <Field className={css.field} type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="div" />

          <label className={css.label}>Password</label>
          <Field className={css.field} type="password" name="password" />
          <ErrorMessage className={css.error} name="password" component="div" />

          <button type="submit" className={css.button}>
            Register
          </button>
        </Form>
      </motion.div>
    </Formik>
  );
};

export default RegistrationForm;

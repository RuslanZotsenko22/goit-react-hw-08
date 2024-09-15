import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { motion } from "framer-motion";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Must be XXX - XX - XX")
    .required("Required"),
});

const initialValues = {
  username: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.username,
        number: values.number,
      })
    );
    actions.resetForm({
      values: {
        username: "",
        number: "",
      },
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <motion.div
      // initial={{ x: "+100hv" }}
      // animate={{ x: 0 }}
      // transition={{ type: "spring", stiffness: 50 }}
      >
        <Form className={css.form}>
          <label className={css.label}>Name</label>
          <Field className={css.field} type="text" name="username" />
          <ErrorMessage className={css.error} name="username" component="div" />

          <label className={css.label}>Number</label>
          <Field className={css.field} type="tel" name="number" />
          <ErrorMessage className={css.error} name="number" component="div" />

          <button className={css.button} type="submit">
            Add contact +
          </button>
        </Form>
      </motion.div>
    </Formik>
  );
};

export default ContactForm;

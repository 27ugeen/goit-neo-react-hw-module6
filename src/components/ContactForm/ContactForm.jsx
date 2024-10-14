import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const ContactForm = ({ onSubmit }) => {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(15, "Too long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={css.contactForm}>
          <div className={css.inputGroup}>
            <label htmlFor="name" className={css.label}>
              Name
            </label>
            <div className={css.inputContainer}>
              <Field
                id="name"
                name="name"
                type="text"
                className={css.inputField}
                onFocus={() => setIsNameFocused(true)}
                onBlur={() => setIsNameFocused(false)}
              />
              {isNameFocused && (
                <FontAwesomeIcon icon={faLock} className={css.inputIcon} />
              )}
            </div>
            <ErrorMessage
              name="name"
              component="div"
              className={css.errorMessage}
            />
          </div>

          <div className={css.inputGroup}>
            <label htmlFor="number" className={css.label}>
              Number
            </label>
            <Field
              id="number"
              name="number"
              type="text"
              className={css.inputField}
            />
            <ErrorMessage
              name="number"
              component="div"
              className={css.errorMessage}
            />
          </div>

          <button
            type="submit"
            className={`${css.submitButton} button`}
            disabled={isSubmitting}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;

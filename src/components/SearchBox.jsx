import css from "./SearchBox.module.css";
import { useId } from "react";
import { Form, Formik, Field } from "formik";

const SearchBox = ({ value, onFilter }) => {
  const findInputId = useId();

  return (
    <Formik>
      <Form className={css.findContactForm}>
        <label className={css.findContactName} htmlFor={findInputId}>
          Find contacts by name
        </label>
        <Field
          autoComplete="on"
          value={value}
          onChange={(event) => onFilter(event.target.value)}
          id={findInputId}
          className={css.findContactInput}
          type="text"
        />
      </Form>
    </Formik>
  );
};

export default SearchBox;

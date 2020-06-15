import { useState, useEffect } from "react";

function useFormValidation(initialState, validate) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log("authenticated!", values.email, values.message);
        fetch("http://localhost:8080/send", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((response) => {
            if (response.status === "success") {
              setConfirmSubmit(true);
            }
          });
        setSubmitting(false);
        (function () {
          document.getElementById("mail").classList.add("transition-mail");
          document.getElementById("message").classList.add("transition-message");
          document.getElementById("thx").classList.add("transition-thx");
          document
            .getElementById("submit")
            .classList.add("transition-sendButton");
        })();
      } else {
        setSubmitting(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    const validationErrors = validate(values, event.target.name);
    setErrors(validationErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
    confirmSubmit,
  };
}

export default useFormValidation;

export default function validateAuth(values, field) {
  let errors = {};

  if (field == "email") {
    if (!values.email) {
      errors.email = "Required Email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  } else if (field == "message") {
    if (!values.message) {
      errors.message = "Required message";
    } else if (values.message.length < 20) {
      errors.message = "message must be at least 20 characters";
    }
    return errors;
  } else {
    if (!values.email) {
      errors.email = "Required Email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    // message Errors
    if (!values.message) {
      errors.message = "Required message";
    } else if (values.message.length < 20) {
      errors.message = "message must be at least 20 characters";
    }
    return errors;
  }
}

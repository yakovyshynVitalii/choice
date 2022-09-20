import * as yup from "yup";
import { useField } from "vee-validate";

export default function createEmailField() {
  // Validate input email

  const {
    value: inputEmailModel,
    errorMessage: inputEmailError,
    handleBlur: emailBlur,
  } = useField(
    "email",
    yup
      .string()
      .trim()
      .required("This field is required.")
      .email("The field was entered incorrectly.")
  );

  //...
  return {
    inputEmailModel,
    inputEmailError,
    emailBlur,
  };
}

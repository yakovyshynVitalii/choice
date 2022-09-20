import * as yup from "yup";
import { useField } from "vee-validate";

export default function createNameField() {
  // Validate input name

  const {
    value: inputNameModel,
    errorMessage: inputNameError,
    handleBlur: nameBlur,
  } = useField("name", yup.string().trim().required("This field is required."));

  //...
  return {
    inputNameModel,
    inputNameError,
    nameBlur,
  };
}

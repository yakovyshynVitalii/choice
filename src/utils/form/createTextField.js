import * as yup from "yup";
import { useField } from "vee-validate";

export default function createTextField() {
  // Validate input text

  const {
    value: inputTextModel,
    errorMessage: inputTextError,
    handleBlur: textBlur,
  } = useField("body", yup.string().trim());

  //...
  return {
    inputTextModel,
    inputTextError,
    textBlur,
  };
}

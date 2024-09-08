import * as Yup from "Yup";
export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("required"),
  email: Yup.string().email("Invalid email").required("required"),
  password: Yup.string().required("required"),
});

export const loginValidationSchema = Yup.object().shape({
  name: Yup.string().required("required"),
  password: Yup.string().required("required"),
});

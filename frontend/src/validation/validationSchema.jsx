import * as Yup from "Yup";

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const loginValidationSchema = Yup.object().shape({
  name: Yup.string().required("required"),
  password: Yup.string().required("required"),
});

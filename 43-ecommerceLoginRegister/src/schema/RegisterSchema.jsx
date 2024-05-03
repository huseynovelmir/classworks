import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  password: yup
    .string()
    .required("Please enter a password")
    .matches(/^(?=.*[0-9])/, "Must contain at least one number"),
});

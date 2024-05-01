import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  password: Yup.string()
    .required("No password provided.")
    .min(6, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

export default function FormPropsTextFields() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(yupResolver(schema));

  const onSubmit = (data) => {
    console.log(data.firstName);
    console.log(data.password);
    let arr = [];
    arr.push(data.password);
    arr.map((el) => {
      console.log(el);
    });
    console.log(arr);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <br />
      <input
        {...register("firstName", {
          required: "You must specify a Name",
          maxLength: {
            value: 6,
            message: "Qaqa nəslivin adın soruşmadım",
          },
          minLength: {
            value: 3,
            message: "Name must have at least 3 characters",
          },
        })}
      />
      <br />
      {errors.firstName && (
        <span style={{ color: "red" }}>{errors.firstName.message}</span>
      )}
      <br />
      <label>Password</label>
      <br />
      <input
        type="password"
        {...register("password", {
          required: "You must specify a password",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters",
          },
        })}
      />
      <br />
      {errors.password && (
        <sapn style={{ color: "red" }}>{errors.password.message}</sapn>
      )}
      <br />
      <input type="submit" />
    </form>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../Table/Table";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { productFormSchema } from "../../schema/productForm";
export default function FormPropsTextFields() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("https://northwind.vercel.app/api/suppliers").then((res) => {
      setData(res.data);
    });
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productFormSchema),
  });

  function products(value) {
    let obj = {
      id: uuidv4(),
      companyName: value.companyName,
      contactName: value.contactName,
      address: {
        city: value.city,
        region: value.region,
      },
    };
    obj.companyName =
      obj.companyName.charAt(0).toUpperCase() + value.companyName.slice(1);
    obj.address.city = value.city.toUpperCase();
    console.log(obj);
    axios.post("https://northwind.vercel.app/api/suppliers", obj);
  }
  return (
    <>
      <form className="formBox" onSubmit={handleSubmit(products)}>
        <TextField
          id="outlined-required"
          label="id"
          defaultValue=""
          {...register("id", { required: true, maxLength: 10, minLength: 3 })}
        />
        {errors.ID && <span>Id field is required</span>}
        <TextField
          id="outlined-required"
          label="Company Name"
          defaultValue=""
          {...register("companyName", {
            required: true,
            maxLength: 10,
            minLength: 3,
          })}
        />
        {errors.companyName && <span>Company name field is required</span>}
        <TextField
          id="outlined-required"
          label="Contact Name"
          defaultValue=""
          {...register("contactName", {
            required: true,
            maxLength: 10,
            minLength: 3,
          })}
        />
        {errors.contactName && <span>Contact name field is required</span>}
        <TextField
          id="outlined-required"
          label="City"
          defaultValue=""
          {...register("city", { required: true, maxLength: 10, minLength: 3 })}
        />
        {errors.city && <span>City field is required</span>}
        <TextField
          id="outlined-required"
          label="Region"
          defaultValue=""
          {...register("region", {
            required: true,
            maxLength: 10,
            minLength: 3,
          })}
        />
        {errors.region && <span sx={{}}>City field is required</span>}
        <input type="submit" value="Submit" />
      </form>
      <Table data={data} />
    </>
  );
}

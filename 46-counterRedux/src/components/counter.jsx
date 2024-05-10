import React from "react";
import { dec, inc } from "../redux/features/counterSlice";
import { useDispatch, useSelector } from "react-redux";
const counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(inc())}>Increase</button>
      <button onClick={() => dispatch(dec())}>Decrease </button>
    </div>
  );
};

export default counter;

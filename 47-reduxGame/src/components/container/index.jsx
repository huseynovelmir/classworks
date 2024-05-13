import React from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { filteredBox } from "../../redux/features/dataSlice";
const Container = () => {
  const myData = useSelector((state) => state.data.value);
  const dispatch = useDispatch();
  console.log(myData);

  return (
    <div className="container">
      {myData.map((el) => (
        <div
          key={el.id}
          className="myBox"
          style={{ backgroundColor: el.color }}
          onClick={() => {
            dispatch(filteredBox(el));
          }}
        >
          {el.title}
        </div>
      ))}
    </div>
  );
};

export default Container;

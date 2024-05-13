import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";

const GreenContainer = () => {
  const greenArr = useSelector((state) => state.data.greenArr);
  return (
    <div className="box">
      <span>Green</span>
      <div className="greenContainer contBox">
        {greenArr.map((el) => (
          <div
            className="myBox"
            style={{ backgroundColor: el.color }}
            key={el.id}
          >
            {el.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GreenContainer;

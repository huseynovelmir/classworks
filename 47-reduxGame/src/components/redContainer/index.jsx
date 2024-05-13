import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";

const RedContainer = () => {
  const redArr = useSelector((state) => state.data.redArr);
  return (
    <div className="box">
      <span>Red</span>
      <div className="redContainer contBox">
        {redArr.map((el) => (
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

export default RedContainer;

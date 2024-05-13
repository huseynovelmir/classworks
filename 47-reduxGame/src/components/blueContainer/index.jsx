import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";

const BlueContainer = () => {
  const blueArr = useSelector((state) => state.data.blueArr);

  return (
    <div className="box">
      <span>Blue</span>
      <div className="blueContainer contBox">
        {blueArr.map((el) => (
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

export default BlueContainer;

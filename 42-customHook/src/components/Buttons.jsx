import React from "react";

const Buttons = ({ hideWord, showWord, toggleWord }) => {
  return (
    <>
      <button onClick={hideWord}>Hide</button>
      <button onClick={showWord}>Show</button>
      <button onClick={toggleWord}>Toggle</button>
    </>
  );
};

export default Buttons;

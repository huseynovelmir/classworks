import { useState } from "react";

const UseButton = () => {
  const [show, setShow] = useState(true);
  function hideWord() {
    setShow(false);
  }
  function showWord() {
    setShow(true);
  }
  function toggleWord() {
    setShow(!show);
  }
  return [hideWord, showWord, toggleWord, show];
};

export default UseButton;

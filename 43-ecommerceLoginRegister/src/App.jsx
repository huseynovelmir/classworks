import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [loginregister, setLoginregister] = useState(true);
  return (
    <>
      {loginregister ? (
        <Login setLoginregister={setLoginregister} />
      ) : (
        <Register setLoginregister={setLoginregister} />
      )}
    </>
  );
}

export default App;

import React from "react";
import Login from "./Login";

var login = false;

//------- using ternary operator we can shortern this one into" login?<h1>Hello</h1>:<Login /> "----
// function check() {
//   if (login) return <h1>Hello</h1>;
//   else return <Login />;
// }

function App() {
  return <div className="container">{login ? <h1>Hello</h1> : <Login />}</div>;
}

export default App;

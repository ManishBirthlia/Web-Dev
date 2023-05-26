import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({ fName: "", lName: "" });
  function handleInput(e) {
    const name = e.target.value;
    const v = e.target.name;
    if (v === "fName")
      setFullName((p) => {
        return { fName: name, lName: p.lName };
      });
    else
      setFullName((p) => {
        return { fName: p.fName, lName: name };
      });
    // setFullName((p) => {
    //   if (v === "fName") return { fName: name, lName: p.lName };
    //   else return { lName: name, fName: p.fName };
    // });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input onChange={handleInput} name="fName" placeholder="First Name" />
        <input onChange={handleInput} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

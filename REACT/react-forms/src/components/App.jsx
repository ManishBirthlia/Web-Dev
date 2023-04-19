import React, { useState } from "react";

function App() {
  const [hoverState, setState] = useState(false);
  const [name, setName] = useState("");
  function isHoverIn() {
    setState(true);
  }
  function isHoverOut() {
    setState(false);
  }
  function handleName(event) {
    setName(event.target.value);
  }
  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        onChange={handleName}
        value={name}
        type="text"
        placeholder="What's your name?"
      />
      <button
        style={{ backgroundColor: hoverState ? "black" : "white" }}
        onMouseOver={isHoverIn}
        onMouseOut={isHoverOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

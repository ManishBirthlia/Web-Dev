import React, { useState } from "react";

function App() {
  const [mouse, setMouse] = useState(false);
  const [showname, showSetName] = useState("");
  const [name, setName] = useState("");

  function handleShowName(event) {
    showSetName(name);
  }
  function handleName(event) {
    setName(event.target.value);
  }
  function isMouseOver() {
    setMouse(true);
  }
  function isMouseOut() {
    setMouse(false);
  }
  return (
    <div className="container">
      <h1>Hello {showname}</h1>
      <input
        onChange={handleName}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button
        onClick={handleShowName}
        style={{ backgroundColor: mouse ? "black" : "white" }}
        onMouseOver={isMouseOver}
        onMouseOut={isMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

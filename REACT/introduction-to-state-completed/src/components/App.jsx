import React, { useState } from "react";

function App() {
  const [isDone, set] = useState(false);
  function strike() {
    isDone ? set(false) : set(true);
  }
  return (
    <div>
      <h1 style={isDone ? { textDecoration: "line-through" } : null}>
        Buy milk
      </h1>
      <button onClick={strike}>Change</button>
    </div>
  );
}
export default App;

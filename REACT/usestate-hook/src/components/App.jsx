import React from "react";

function App() {
  const [count, set] = React.useState(0);
  function increase() {
    set(count + 1);
  }
  function decrease() {
    set(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      {/* <button onClick={set(count +1)}>+</button> // this will not work */}
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;

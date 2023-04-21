import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  function showTime() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(showTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      {/* <button onClick={showTime}>Get Time</button> */}
    </div>
  );
}

export default App;

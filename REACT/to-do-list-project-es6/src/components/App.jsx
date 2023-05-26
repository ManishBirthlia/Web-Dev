import React, { useState } from "react";

function App() {
  const [text, setText] = useState({ te: "", k: 0 });
  const [list, setList] = useState([]);
  function handleClick(event) {
    const { type, value } = event.target;
    if (type === "text") setText({ te: value, k: text.k });
    else {
      setList((p) => {
        return [...p, { id: text.k, t: text.te }];
      });
      setText({ te: "", k: text.k + 1 });
    }
  }
  function handleRemove() {
    setList([]);
  }
  function handleRemovePoint(event) {
    const value = Number(event.target.value);
    setList((p) => {
      return list.filter((x) => {
        return x.id !== value;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleClick} value={text.te} type="text" />
        <button onClick={handleClick} type="submit">
          <span>Add</span>
        </button>
        <button onClick={handleRemove} type="submit">
          <span>clear</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((e) => {
            return (
              <div key={e.id * -1} style={{ textAlign: "left" }}>
                <input
                  value={e.id}
                  onChange={handleRemovePoint}
                  type="checkbox"
                  style={{ display: "inline-block" }}
                />
                <ul style={{ display: "inline-block" }}>{e.t}</ul>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Form from "./form";
import List from "./list";
function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Form
        text={text}
        handleChange={(e) => {
          setText(e.target.value);
        }}
        handleClick={() => {
          setList((p) => {
            return [{ text: text }, ...p];
          });
          setText("");
        }}
      />
      <List
        handleDelete={(index) => {
          setList((p) => {
            return p.filter((e, i) => {
              return i !== index;
            });
          });
        }}
        list={list}
      />
    </div>
  );
}

export default App;

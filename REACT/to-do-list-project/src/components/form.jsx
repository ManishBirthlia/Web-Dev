import React from "react";

export default function (prop) {
  return (
    <div className="form">
      <input
        value={prop.text}
        onChange={(e) => {
          return prop.handleChange(e);
        }}
        type="text"
      />
      <button onClick={prop.handleClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

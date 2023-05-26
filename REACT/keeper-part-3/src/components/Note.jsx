import React from "react";

function Note(prop) {
  function handleDelete() {
    prop.setList((p) => {
      return p.filter((e, i) => {
        return i !== prop.id;
      });
    });
  }
  return (
    <div className="note">
      <h1>{prop.title}</h1>
      <p>{prop.content}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default Note;

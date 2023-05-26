import React, { useState } from "react";

function CreateArea(prop) {
  const [note, SetNote] = useState({ title: "", content: "" });
  function handleChange(event) {
    const { name, value } = event.target;
    SetNote((p) => {
      return { ...p, [name]: value };
    });
  }
  function handleSubmit(e) {
    prop.setList((p) => {
      return [...p, note];
    });
    SetNote({ title: "", content: "" });
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

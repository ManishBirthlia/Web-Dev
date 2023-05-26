import React from "react";
import emojipedia from "../emojipedia";
import Note from "./Note";

function note(prop) {
  return (
    <Note
      key={prop.id}
      emoji={prop.emoji}
      name={prop.name}
      meaning={prop.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(Note)}</dl>
    </div>
  );
}

export default App;

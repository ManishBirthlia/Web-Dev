import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  return (
    <div>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        value={text}
        placeholder="Write anything here"
      />
      <button
        onClick={() => {
          list.push(text);
          setText("");
          setList(list);
        }}
      >
        Add
      </button>
      {list.map((element) => (
        <li>{element}</li>
      ))}
    </div>
  );
}

export default App;

// import React, { useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <button
//         onClick={() => {
//           todos.push({ id: todos.length, text: text });
//           setTodos(todos);
//           setText("");
//         }}
//       >
//         Add
//       </button>
//       <ul>
//         {todos.map((item) => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default App;

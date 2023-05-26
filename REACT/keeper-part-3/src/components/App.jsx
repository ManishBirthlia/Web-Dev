import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [list, setList] = useState([]);
  return (
    <div>
      <Header />
      <CreateArea setList={setList} />
      {list.map((e, index) => {
        return (
          <Note
            setList={setList}
            key={index}
            id={index}
            title={e.title}
            content={e.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

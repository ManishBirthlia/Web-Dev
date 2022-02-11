import { Route, Routes } from "react-router-dom";

import "./App.scss";
import { Footer, Header } from "./components";
import { Homepage, Projects } from "./pages";
import { LoremIpsum, OtherProject } from "./pages/projectPages";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/lorem-ipsum" element={<LoremIpsum />} />
        <Route path="/projects/other-project" element={<OtherProject />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

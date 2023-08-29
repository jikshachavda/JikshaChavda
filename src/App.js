import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./About";
import "./App.css";
import Home from "./Home";
import Projects from "./Projects";
import Skill from "./Skill";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skill" element={<Skill />}></Route>
          <Route path="/project" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from "./pages/projects/Projects";
import Blog from "./pages/blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={ <Projects />}/>
        <Route path='/blog' element={ <Blog/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

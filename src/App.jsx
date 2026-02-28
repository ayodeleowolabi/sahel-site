import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Video from "./pages/Video";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div style={{ backgroundColor: '#0A0A07', color: '#F5F0E8', minHeight: '100vh' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/video" element={<Video />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
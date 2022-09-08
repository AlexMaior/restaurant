import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Navigation from "./components/Navigation";
import { ParallaxProvider } from "react-scroll-parallax";
function App() {
  return (
    <Router>
      <Navigation />
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ParallaxProvider>
    </Router>
  );
}

export default App;

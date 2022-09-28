import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Navigation from "./components/Navigation";
import { ParallaxProvider } from "react-scroll-parallax";
import NavigationMobile from "./components/NavigationMobile";
import { useEffect } from "react";
import Menu from "./components/Menu";

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <Router>
      {windowSize.innerWidth < 600 ? <NavigationMobile /> : <Navigation />}
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </ParallaxProvider>
    </Router>
  );
}

export default App;

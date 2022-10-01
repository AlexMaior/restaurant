import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navigation from "./components/NavigationComponents/Navigation";
import { ParallaxProvider } from "react-scroll-parallax";
import NavigationMobile from "./components/NavigationComponents/NavigationMobile";
import { useEffect } from "react";
import Menu from "./components/Menu";
import UpArrow from "./components/UpArrow";

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
      <UpArrow />
      <ParallaxProvider>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Menu />} />
        </Routes>
      </ParallaxProvider>
    </Router>
  );
}

export default App;

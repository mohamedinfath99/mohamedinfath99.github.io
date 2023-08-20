import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skill from "./components/Skill/Skill";
import "./App.css";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";


function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Skill/>
      <Works />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

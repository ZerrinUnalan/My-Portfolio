import { useContext } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Skills from "./components/skills";
import { DarkModeContext } from "./contexts/DarkModeContext";
import { Route } from "react-router-dom";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const darkClass = darkMode ? "dark dark:bg-[#252128]" : "";
  return (
    <>
      <div className={darkClass}>
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;

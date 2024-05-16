import { useContext } from "react";
import Header from "./components/header";
import Skills from "./components/skills";
import Profile from "./components/profile";
import Projects from "./components/projects";
import { DarkModeContext } from "./contexts/DarkModeContext";
import { Route } from "react-router-dom";
import data from "./mocks/data.json";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const darkClass = darkMode ? "dark dark:bg-[#252128]" : "";

  return (
    <>
      <div className="{darkClass}">
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

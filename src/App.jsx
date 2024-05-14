import { useContext } from "react";
import Header from "./components/header";
import Skills from "./components/skills";
import Profile from "./components/profile";
import Projects from "./components/projects";
import { darkModeContext } from "./contexts/DarkModeContext";
import { Route } from "react-router-dom";

function App() {
  const { darkMode } = useContext(darkModeContext);
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

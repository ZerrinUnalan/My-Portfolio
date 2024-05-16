import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};

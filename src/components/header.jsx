import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { LanguageContext } from "../contexts/LanguageContext";

const Header = () => {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);
  const { apiData, toggleLanguage } = useContext(LanguageContext);
};

export default Header;

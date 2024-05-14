import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { LanguageContext } from "../contexts/LanguageContext";

const Header = () => {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);
  const { apiData, toggleLanguage } = useContext(LanguageContext);
};

return (
  <div className={` bg-white dark:bg-[#252128] w-full p-4`}>
    <div className="w-4/5 max-w-4xl mx-auto flex items-center justify-end gap-4 font-inter font-bold">
      <label
        htmlFor="darkMode"
        className="bg-[#4731D3] dark:bg-[#3A3A3A] relative w-10 h-5 rounded-full cursor-pointer"
      >
        <input
          type="checkbox"
          id="darkMode"
          className="sr-only peer"
          checked={darkMode}
          onChange={toggleTheme}
        />
        <span className="w-2/5 h-3/4 bg-[#FFE86E] absolute rounded-full left-[22px] top-[3px] peer-checked:left-[2px]"></span>
        <span className="w-2/5 h-3/4 bg-[#3A3A3A] absolute rounded-full invisible peer-checked:visible peer-checked:left-[7px] peer-checked:top-[3px]"></span>
      </label>
      <p className="text-[#777777] dark:text-[#D9D9D9] tracking-wider">
        {darkMode ? apiHeader.lightMode : apiHeader.darkMode}
      </p>
      <p className="text-[#777777] dark:text-[#D9D9D9]">|</p>
    </div>
  </div>
);

export default Header;

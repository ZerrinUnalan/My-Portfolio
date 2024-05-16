import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { LanguageContext } from "../contexts/LanguageContext";

const Header = () => {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);
  const { apiData, toggleLanguage } = useContext(LanguageContext);

  const apiHeader = apiData.header;
  const apiHero = apiData.hero;

  const scroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
        <p
          className="text-[#777777] dark:text-[#D9D9D9] tracking-wider cursor-pointer"
          onClick={toggleLanguage}
        >
          {apiHeader.languagePrefix}
          <span className="text-[#4731D3] dark:text-[#BAB2E7]">
            {apiHeader.language}
          </span>
          {apiHeader.languageSuffix}
        </p>
      </div>
      <div className="w-4/5 max-w-4xl mx-auto flex text-black justify-between mt-4">
        <div className="text-[#7B61FF] font-semibold py-3 px-4 rounded-full bg-[#EEEBFF] dark:text-[#8F88FF] dark:bg-[#4731D3]">
          O
        </div>
        <nav className="flex items-center font-inter gap-4 md:gap-12 text-lg text-[#6B7280] font-medium">
          <div className="cursor-pointer" onClick={() => scroll("skills")}>
            {apiHeader.skills}
          </div>
          <div className="cursor-pointer" onClick={() => scroll("projects")}>
            {apiHeader.projects}
          </div>
          <div className="text-[#3730A3] bg-white py-2 px-4 border border-[#3730A3] rounded ">
            <a href={apiHero.links.hireMe} target="_blank">
              {apiHeader.hireMe}
            </a>
          </div>
        </nav>
      </div>
      <div className="w-4/5 max-w-4xl mx-auto flex flex-col  mt-12 gap-4 items-center md:flex-row">
        <div className="flex flex-col w-3/5 min-w-60 gap-6">
          <div className="flex items-center ">
            <hr className="w-[6.375rem] border-[#4338CA] dark:border-[#B7AAFF]  mr-4" />
            <p className="text-[#4338CA] dark:text-[#B7AAFF] text-xl font-medium">
              {apiHero.name}
            </p>
          </div>

          <h1 className="text-[#1F2937] dark:text-[#AEBCCF] font-bold text-5xl">
            {apiHero.title}
          </h1>
          <h2 className="text-[#6B7280] dark:text-white text-lg">
            {apiHero.description}
          </h2>
          <div className="text-[#3730A3] text-lg font-medium flex flex-wrap gap-2  ">
            <a
              target="_blank"
              href={apiHero.links.hireMe}
              className="px-5 py-2 text-white bg-[#3730A3] dark:bg-[#E1E1FF] dark:text-black rounded"
            >
              {apiHero.hireMe}
            </a>
            <a
              target="_blank"
              href={apiHero.links.github}
              className="flex items-center px-3 py-2 gap-2 border border-[#3730A3] dark:border-[#E1E1FF] dark:bg-[#383838] dark:text-[#E1E1FF] rounded"
            >
              <svg
                width="26"
                height="28"
                viewBox="0 0 26 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9993 0.757569C6.62413 0.756721 1.18956 5.54566 0.16884 12.0638C-0.851878 18.5819 2.84266 24.9046 8.89128 26.991C9.54273 27.1124 9.77596 26.6981 9.77596 26.3419C9.77596 26.022 9.76553 25.1745 9.76162 24.0477C6.14606 24.8574 5.38255 22.242 5.38255 22.242C5.14453 21.4282 4.63283 20.7296 3.94023 20.273C2.76762 19.4377 4.03014 19.4566 4.03014 19.4566C4.86488 19.5751 5.59955 20.0874 6.01967 20.8439C6.37528 21.5136 6.97439 22.0085 7.68388 22.2185C8.39338 22.4286 9.15449 22.3365 9.7981 21.9626C9.85859 21.2798 10.1519 20.6416 10.6255 20.1624C7.74081 19.8237 4.70765 18.6685 4.70765 13.5092C4.69164 12.1748 5.17005 10.8848 6.04443 9.90465C5.6488 8.74312 5.69539 7.4691 6.17472 6.3419C6.17472 6.3419 7.26525 5.97888 9.74729 7.71977C11.876 7.11519 14.1227 7.11519 16.2514 7.71977C18.7347 5.97753 19.824 6.3419 19.824 6.3419C20.3055 7.46856 20.3521 8.74348 19.9543 9.90465C20.8318 10.8847 21.3099 12.1781 21.2884 13.5146C21.2884 18.6874 18.2527 19.8237 15.3576 20.157C15.9821 20.8183 16.3024 21.7256 16.2371 22.6482C16.2371 24.4485 16.2214 25.9006 16.2214 26.3419C16.2214 26.7022 16.4534 27.1205 17.1165 26.9883C23.1626 24.8983 26.8532 18.5753 25.8304 12.0589C24.8076 5.54251 19.3732 0.756058 12.9993 0.757569Z"
                  fill={`${darkMode ? "#BAB2E7" : "#3730A3"}`}
                />
              </svg>{" "}
              {apiHero.github}
            </a>
            <a
              target="_blank"
              href={apiHero.links.linkedin}
              className="flex items-center px-3 py-2 gap-2 border border-[#3730A3] dark:border-[#E1E1FF] dark:bg-[#383838] dark:text-[#E1E1FF] rounded"
            >
              <svg
                width="24"
                height="26"
                viewBox="0 0 24 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 25.4881H7.99998V8.68442H13.3333V11.485C14.4701 9.96605 16.1941 9.0605 18.0333 9.01629C21.3407 9.03557 24.0096 11.8622 24 15.3359V25.4881H18.6666V16.036C18.4533 14.4714 17.1756 13.3104 15.6706 13.3138C15.0123 13.3357 14.391 13.6384 13.9499 14.1521C13.5088 14.6658 13.2862 15.3461 13.3333 16.036V25.4881ZM5.33332 25.4881H0V8.68442H5.33332V25.4881ZM2.66666 5.88381C1.1939 5.88381 0 4.62993 0 3.0832C0 1.53647 1.1939 0.282593 2.66666 0.282593C4.13942 0.282593 5.33332 1.53647 5.33332 3.0832C5.33332 3.82597 5.05237 4.53831 4.55228 5.06353C4.05218 5.58875 3.3739 5.88381 2.66666 5.88381Z"
                  fill={`${darkMode ? "#BAB2E7" : "#3730A3"}`}
                />
              </svg>
              {apiHero.linkedin}
            </a>
          </div>
        </div>
        <div className="w-3/5 md:w-2/5 min-w-60 order-first md:order-none">
          <img className="w-full block h-auto" src={apiHero.heroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;

import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Skills = () => {
  const { apiData } = useContext(LanguageContext);
  const { skills } = apiData;
  return (
    <div id="skills" className="w-full bg-white dark:bg-[#252128]">
      <div className="w-4/5 max-w-4xl mx-auto flex flex-col mt-12">
        <h1 className="font-semibold text-5xl text-[#1F2937] dark:text-[#AEBCCF] mb-6 text-center md:text-start">
          {skills.title}
        </h1>
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-0 md:items-stretch">
          {skills.items.map((item) => {
            return (
              <div className="w-3/5 md:w-1/4" key={item.name}>
                <h2 className="font-medium text-3xl text-[#4338CA] dark:text-[#B7AAFF] mb-6">
                  {item.name}
                </h2>
                <p className="text-[#6B7280] dark:text-white text-xs">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        <hr className=" border-[#BAB2E7] w-full mx-auto my-8" />
      </div>
    </div>
  );
};

export default Skills;

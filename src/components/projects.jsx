import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Projects = () => {
  const { apiData } = useContext(LanguageContext);
  const { projects } = apiData;
  return (
    <div id="projects" className="w-full bg-white dark:bg-[#252128] pb-20">
      <div className="w-4/5 max-w-4xl mx-auto flex flex-col">
        <h1 className="text-black dark:text-[#AEBCCF] font-semibold text-5xl mb-6 text-center md:text-start">
          {projects.title}
        </h1>
        <div className=" flex flex-col items-center gap-4 md:flex-row md:justify-between md:items-stretch md:gap-0">
          {projects.items.map((item) => {
            return (
              <div className="w-3/5 md:w-1/4">
                <img className="w-full" src={item.image} alt={item.title} />
                <h2 className="text-[#4338CA] dark:text-[#CFCBFF] font-medium text-3xl my-2">
                  {item.title}
                </h2>
                <p className="text-[#6B7280] dark:text-white text-xs">
                  {item.description}
                </p>
                <div className="flex my-2 gap-2">
                  {item.technologies.map((i) => {
                    return (
                      <p className="text-[#3730A3] text-xs font-medium border border-[#3730A3] dark:text-[#8F88FF] dark:border-[#8F88FF] py-1 px-2 rounded">
                        {i}
                      </p>
                    );
                  })}
                </div>
                <div className="flex justify-between">
                  <a
                    className="text-[#3730A3] dark:text-[#E1E1FF] font-medium underline"
                    href={item.links.github}
                  >
                    {item.github}
                  </a>
                  <a
                    className="text-[#3730A3] dark:text-[#E1E1FF] font-medium underline"
                    href={item.links.viewSite}
                  >
                    {item.viewSite}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

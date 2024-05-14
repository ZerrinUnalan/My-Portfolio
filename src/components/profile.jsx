import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Profile = () => {
  const { apiData } = useContext(LanguageContext);
  const { profile } = apiData;
  return (
    <div className="w-full bg-white text-black dark:text-white dark:bg-[#252128]">
      <div className="w-4/5 max-w-4xl mx-auto flex flex-col ">
        <h1 className="text-[#1F2937] dark:text-[#AEBCCF] font-semibold text-5xl mb-6 text-center md:text-start">
          {profile.title}
        </h1>
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:items-stretch">
          <div className="flex flex-col gap-2  w-3/5 md:w-3/8">
            <h2 className="text-[#4338CA] dark:text-[#B7AAFF] font-medium text-3xl mb-2">
              {profile.profileInformation.title}
            </h2>
            {profile.profileInformation.items.map((item) => {
              return (
                <div className="flex ">
                  <p className="w-1/2 font-semibold">{item.label}</p>
                  <p className="w-1/2">{item.value}</p>
                </div>
              );
            })}
          </div>
          <div className="w-3/5 md:w-1/2">
            <h2 className="text-[#4338CA] dark:text-[#B7AAFF] font-medium text-3xl mb-4">
              {profile.aboutMe.title}
            </h2>
            <p className="text-[#6B7280] dark:text-white mb-4">
              {profile.aboutMe.descriptions[0]}
            </p>
            <p className="text-[#6B7280] dark:text-white">
              {profile.aboutMe.descriptions[1]}
            </p>
          </div>
        </div>
        <hr className="bg-[#BAB2E7] border border-[#BAB2E7] w-full mx-auto my-8" />
      </div>
    </div>
  );
};

export default Profile;

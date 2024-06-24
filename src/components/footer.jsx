import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Footer = () => {
  const { apiData } = useContext(LanguageContext);
  const { footer } = apiData;
  return (
    <div className="w-full bg-[#F9F9F9] dark:bg-[#141414] py-20">
      <div className="w-4/5 max-w-4xl mx-auto flex flex-col items-center md:items-stretch">
        <h1 className="font-semibold text-[42px] text-[#1F2937] dark:text-[#AEBCCF] mb-8 w-3/5 leading-tight">
          {footer.title}
        </h1>
        <div className="flex flex-col gap-2 w-3/5 md:flex-row md:justify-between md:gap-0 md:w-full">
          <div className="flex gap-2">
            <img src="./../../assets/images/mail-logo.png" alt="" />
            <a
              className="text-[#AF0C48] dark:text-[#BAB2E7] underline text-xl font-medium"
              href="mailto:zerunalan@gmail.com"
            >
              {footer.mail}
            </a>
          </div>
          <div className="flex flex-col  gap-2 md:flex-row md:items-stretch">
            <a
              target="_blank"
              className="font-medium text-lg leading-normal text-[#0A0A14] dark:text-[#E1E1FF]"
              href={footer.links.personalBlog}
            >
              {footer.personalBlog}
            </a>
            <a
              target="_blank"
              className="font-medium text-lg leading-normal text-[#00AB6B] dark:text-[#17D18B]"
              href={footer.links.github}
            >
              {footer.github}
            </a>
            <a
              target="_blank"
              className="font-medium text-lg leading-normal text-[#0077B5] dark:text-[#0BA6F6]"
              href={footer.links.linkedin}
            >
              {footer.linkedin}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";
import data from "../mocks/data.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage("language", "en");
  const [apiData, setApiData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://reqres.in/api/workintech",
        data
      );
      setApiData(response.data[language]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [language]);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "tr" : "en";
    setLanguage(newLang);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <LanguageContext.Provider value={{ apiData, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

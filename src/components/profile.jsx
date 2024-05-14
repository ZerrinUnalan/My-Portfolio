import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Profile = () => {
  const { apiData } = useContext(LanguageContext);
  const { profile } = apiData;
  return (
    
  );
};

export default Profile;

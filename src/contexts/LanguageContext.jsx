import { useContext, useEffect, useState } from "react";
import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.post("https://reqres.in/api/workintech", data);
    setApiData(response.data[language]);
    setLoading(false);
  } catch (error) {
    console.error(error);
    setLoading(false);
  }
};

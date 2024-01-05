import { useState, useEffect } from "react";
import { getFilms, getSearchFilms } from "../helpers/getFilms";

export const UseAxiosFilms = (language) => {
  console.log("🚀 ~ file: UseAxiosFilms.jsx:5 ~ UseAxiosFilms ~ language:", language)
  const [films, setFilms] = useState([]);
  const getData = async () => {
    const resultsFilmsApi = await getFilms(language);
    setFilms(resultsFilmsApi);
  };

  useEffect(() => {
    getData();
  }, [language]);

  return {
    films,
  };
};

export const UseAxiosSearchFilms = (value, language) => {
  console.log("🚀 ~ file: UseAxiosFilms.jsx:21 ~ UseAxiosSearchFilms ~ language:", language)
  const [filmsSearch, setFilmsSearch] = useState([]);
  
  const getDataSearch = async () => {
    if(value === '') return;
    const resultsFilmsApiSearch = await getSearchFilms(value, language);
    setFilmsSearch(resultsFilmsApiSearch);
  };
  
  useEffect(() => {
    getDataSearch();
  }, [value]);
  
  
  return {
    
    filmsSearch,
  };
};

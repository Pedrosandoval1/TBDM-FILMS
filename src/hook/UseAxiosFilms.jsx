import { useState, useEffect } from "react";
import { getFilms, getSearchFilms } from "../helpers/getFilms";

export const UseAxiosFilms = () => {
  const [films, setFilms] = useState([]);
  const getData = async () => {
    const resultsFilmsApi = await getFilms();
    setFilms(resultsFilmsApi);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    films,
  };
};

export const UseAxiosSearchFilms = (value) => {
  const [filmsSearch, setFilmsSearch] = useState([]);
  
  const getDataSearch = async () => {
    if(value === '') return;
    const resultsFilmsApiSearch = await getSearchFilms(value);
    setFilmsSearch(resultsFilmsApiSearch);
  };
  
  useEffect(() => {
    getDataSearch();
  }, [value]);
  
  
  return {
    
    filmsSearch,
  };
};

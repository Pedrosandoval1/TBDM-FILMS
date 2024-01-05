
import axios from 'axios';
import {baseUrl, apiKey, queryParams, urlImages} from './config';

export const getFilms = async(language) => {
    const url = await axios.get(`${baseUrl}movie/popular?${apiKey}&language=${language}`)
    const results = url.data.results.map((data)=>({
        title: data.original_title,
        img: urlImages + data.backdrop_path,
        overview: data.overview,
        date: data.release_date
    }))
    console.log("🚀 ~ file: getFilms.js:13 ~ results ~ results:", results)

  return results;
};

export const getSearchFilms = async(value, language) => {
    const url = await axios.get(`${baseUrl}search/movie?${queryParams}=${value}&${apiKey}&language=${language}`)
    const resultsSearch = url.data.results.map((data)=>({
        title: data.original_title,
        img: urlImages + data.backdrop_path,
        overview: data.overview,
        date: data.release_date
    }))
    console.log("🚀 ~ file: getFilms.js:26 ~ resultsSearch ~ resultsSearch:", resultsSearch)

  return resultsSearch;
};
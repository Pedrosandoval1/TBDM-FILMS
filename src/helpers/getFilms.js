
import axios from 'axios';
import {baseUrl, apiKey, queryParams, urlImages} from './config';

export const getFilms = async(language) => {
    console.log("🚀 ~ file: getFilms.js:6 ~ getFilms ~ language:", language)
    const url = await axios.get(`${baseUrl}movie/popular?${apiKey}&language=es-${language}`)
    console.log("🚀 ~ file: getFilms.js:9 ~ getFilms ~ `${baseUrl}movie/popular?${apiKey}&language=es-${language}`:", `${baseUrl}movie/popular?${apiKey}${language}`)
    const results = url.data.results.map((data)=>({
        title: data.original_title,
        img: urlImages + data.backdrop_path,
        overview: data.overview,
        date: data.release_date
    }))

  return results;
}

export const getSearchFilms = async(value, language) => {
    console.log("🚀 ~ file: getFilms.js:19 ~ getSearchFilms ~ language:", language)
    const url = await axios.get(`${baseUrl}search/movie?${queryParams}=${value}&${apiKey}${language}`)
    const resultsSearch = url.data.results.map((data)=>({
        title: data.original_title,
        img: urlImages + data.backdrop_path,
        overview: data.overview,
        date: data.release_date
    }))

  return resultsSearch;
}


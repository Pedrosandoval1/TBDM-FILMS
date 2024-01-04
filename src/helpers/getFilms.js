
import axios from 'axios';
import {baseUrl, apiKey, queryParams, urlImages} from './config';

export const getFilms = async() => {
    const url = await axios.get(`${baseUrl}movie/popular?${apiKey}`)
    const results = url.data.results.map((data)=>({
        title: data.original_title,
        img: urlImages + data.backdrop_path,
        overview: data.overview,
        date: data.release_date
    }))

  return results;
}

export const getSearchFilms = async(value) => {
    const url = await axios.get(`${baseUrl}search/movie?${queryParams}=${value}&${apiKey}`)
    const resultsSearch = url.data.results.map((data)=>({
        title: data.original_title,
        img: urlImages + data.backdrop_path,
        overview: data.overview,
        date: data.release_date
    }))

  return resultsSearch;
}


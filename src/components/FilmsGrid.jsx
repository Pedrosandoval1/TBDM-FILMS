/* eslint-disable react/prop-types */
import { useState } from "react";
import { UseAxiosFilms, UseAxiosSearchFilms } from "../hook/UseAxiosFilms";
import { FilmsCart } from "./FilmsCart.jsx";

export const FilmsGrid = ({value, language}) => {
  console.log("🚀 ~ file: FilmsGrid.jsx:7 ~ FilmsGrid ~ language:", language)

  const { films } = UseAxiosFilms(language);
  console.log("🚀 ~ file: FilmsGrid.jsx:11 ~ FilmsGrid ~ language:", language)


  const { filmsSearch } = UseAxiosSearchFilms(value, language);
  console.log("🚀 ~ file: FilmsGrid.jsx:15 ~ FilmsGrid ~ language:", language)


  return (
    <>
      <div className="card-grid">
        { value !== ''
          ?
          filmsSearch.map((films) => <FilmsCart key={films.title + films.date} {...films} />)
          :        
          films.map((films) => <FilmsCart key={films.title + films.date} {...films} />)
        }
      </div>
    </>
  );
};

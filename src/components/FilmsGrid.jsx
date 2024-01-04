/* eslint-disable react/prop-types */
import { UseAxiosFilms, UseAxiosSearchFilms } from "../hook/UseAxiosFilms";
import { FilmsCart } from "./FilmsCart.jsx";

export const FilmsGrid = ({value}) => {
  const { films } = UseAxiosFilms();

  const { filmsSearch } = UseAxiosSearchFilms(value);

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

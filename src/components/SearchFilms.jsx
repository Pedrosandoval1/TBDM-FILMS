import { useState } from "react"
// import { UseAxiosSearchFilms } from "../hook/UseAxiosFilms";


// eslint-disable-next-line react/prop-types
export const SearchFilms = ({setValue}) => {
    
    const [inputValue, setInputValue] = useState('');

        const onInputChange = (e) =>{
            setInputValue(e.target.value)
        };

        const onSubmit = (e) => {
            e.preventDefault();
            setInputValue('');
            setValue(inputValue);
        };

  return (
    <form onSubmit={onSubmit}>
        <input type="text" placeholder="Buscar TV..." onChange={onInputChange}/>
    </form>
  )
};

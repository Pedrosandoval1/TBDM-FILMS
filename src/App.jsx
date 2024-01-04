import { useState } from "react";
import { FilmsGrid } from "./components/FilmsGrid"
import { SearchFilms } from "./components/SearchFilms";

function App() {

  const [value, setValue] = useState('')

  return (
    <>
        <h1>App Films</h1>
        <SearchFilms setValue={setValue}/>
        <FilmsGrid value={value}/>
    </>
  )
}

export default App

import { useState } from "react";
import { FilmsGrid } from "./components/FilmsGrid"
import { SearchFilms } from "./components/SearchFilms";
import { ChangeLanguage } from "./components/ChangeLanguage";

function App() {
  const [language, setLenguage] = useState('') 
  const [value, setValue] = useState('')

  return (
    <>
        <h1>App Films</h1>
        <SearchFilms setValue={setValue}/>
        <ChangeLanguage setLenguage={setLenguage}/>
        <FilmsGrid value={value} language={language}/>
    </>
  )
}

export default App

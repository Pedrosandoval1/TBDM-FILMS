import { useState } from "react"

export const ChangeLanguage = ({setLenguage}) => {
  const changeSpanish = ( ) => {
      setLenguage('&language=es-ES')
  }
  const changeEnglish = ( ) => {
      setLenguage('')
  }


  return (
    <>
      <button  onClick={changeSpanish}>ESPAÑOL</button>    
      <button onClick={changeEnglish}>INGLES</button>    
    </>
  )
}

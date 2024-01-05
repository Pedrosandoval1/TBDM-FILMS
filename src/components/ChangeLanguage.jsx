// eslint-disable-next-line react/prop-types
export const ChangeLanguage = ({ setLenguage }) => {
  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    switch (selectedLanguage) {
      case "Español (ES)":
        setLenguage("es-ES");

        break;
      case "English (US)":
        setLenguage("en-US");

        break;
      case "Chino (CH)":
        setLenguage("zh-CN");

        break;
      case "Portugues (BR)":
        setLenguage("pt-BR");

        break;

      default:
        break;
    }
  };

  // En React, el evento onClick no funciona en las opciones (<option>) de un elemento select. En su lugar, debes utilizar el evento onChange en el elemento select y
  // manejar el cambio de opción en el controlador de eventos.
  return (
    <>
      <div className="content-select">
        <select className="select-css" onChange={handleChange}>
          <option value="Español (ES)">Español (ES)</option>
          <option value="English (US)">English (US)</option>
          <option value="Chino (CH)">普通话 (CH)</option>
          <option value="Portugues (BR)">Portugues (BR)</option>
        </select>
      </div>
    </>
  );
};

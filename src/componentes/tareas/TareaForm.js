import React, { useState } from "react"
import "./tareas.css"

const TareaForm = (props) => {
  const [inputText, setInputText] = useState("")
  const [validacion, setValidacion] = useState(true)

  const manejarFormulario = (event) => {
    //creamos una funcion que devuelva el valor de setInputText

    setInputText(event.target.value) //target retorna el .valor de setInput
  }

  const submit = (event) => {
    //previene el recargo de la pagina
    event.preventDefault()
    if (inputText.trim() !== "") {
      props.nuevaTarea(inputText) //nuevaTarea la exportamos a App.js(copia) = a inputText
      setInputText("") //quiero que se borre lo escrito(volvemos al valor orginal de setInputText)
      setValidacion(true)
    } else {
      setValidacion(false)
    }
  }

  return (
    <div>
      <form className="form" onSubmit={submit}>
        <span className="texto-span">Añadir tarea</span>
        <input value={inputText} className="input-agregar" onChange={manejarFormulario} />
        <button>Añadir</button>
      </form>
      {!validacion && (
        <div className="validacion">Añada una tarea, por favor</div>
      )}
    </div>
  )
}
export default TareaForm

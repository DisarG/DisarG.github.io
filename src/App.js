import React, { useState } from "react"
import TareaForm from "./componentes/tareas/TareaForm"
import Tarea from "./componentes/tareas/Tarea"
import "./componentes/tareas/tareas.css"

function Llamados() {
  const [listaTareas, setListaTareas] = useState([])

  const [nuevoArray, setNuevoArray] = useState([])

  const nuevaTarea = (tarea) => {
    //importamos de TareaForm
    setListaTareas([tarea, ...listaTareas]) //agregale todos los datos que escribamos en tarea y agregalos a los que ya tenia listaTareas
  }

  const borrar = (id) => {
    const listaFiltrada = listaTareas.filter((e, index) => index !== id) //es para que muestre todo menos el id que precionamos
    setListaTareas(listaFiltrada) //estamos igualando setListaTareas = listaFiltrada para actualizar el useState
  }

  const actualizarTarea = (id, tarea) => {
    const listaActualizada = listaTareas.map((e, index) => {
      //filtrar cuando se edita un elemento
      if (index === id) {
        e = tarea
        console.log(e) //mostramos en consola lo que editamos
      }

      return e
    })

    setListaTareas(listaActualizada)
  }

  const completado = (check) => {
    const accionTerminada = listaTareas[check]
    setNuevoArray([accionTerminada, ...nuevoArray])

    const listaIncompleta = listaTareas.filter(
      (tarea, indice) => indice !== check
    ) //probando
    setListaTareas(listaIncompleta)

  }

  console.log(nuevoArray)

  return (
    <div className="Llamados">
      <TareaForm nuevaTarea={nuevaTarea} />{" "}
      {/*retorname setListaTareas(nuevaTarea), es el (input)*/}
      <div className="lista">
        {listaTareas.map((e, index) => (
          <Tarea
            tarea={e}
            borrar={borrar}
            completado={completado}
            id={index}
            editar={actualizarTarea}
            echo={true}
          />
        ))}
      </div>
      <div className="nuevoArray">
        <h3 className="tareaH3">Tareas completadas</h3>

        {nuevoArray.map((e, index) => (
          <Tarea
            tarea={e}
            borrar={borrar}
            completado={completado}
            id={index}
            editar={actualizarTarea}
            echo={false}
          />
        ))}
      </div>
    </div>
  )
}

export default Llamados

import {
  faArrowDown,
  faCheck,
  faPenSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Link } from "react-router-dom"
import "../home/home.css"

export default function Home() {
  return (
    <>
      <main className="main-home">
        <h1 className="title-home">Bienvenido tu pagina de tareas diarias</h1>
        <div className="CTA">
          <h2 className="title-tareas">Empieza a crear tareas</h2>
          <FontAwesomeIcon className="arrow" icon={faArrowDown} />
          <Link className="link-tareas" to={"/tareas"}>
            Presione Aqui
          </Link>
        </div>
        <div className="contenedor">
          <div className="contenedor-hijo">
            <h1>Crear Tareas</h1>
            <FontAwesomeIcon className="arrow" icon={faCheck} />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, cumque. Alias aliquam, culpa illo unde hic at impedit
            iure dolorem quia doloribus neque in quaerat! Hic temporibus
            sapiente similique ipsum.
            <p> </p>
          </div>
          <div className="contenedor-hijo">
            <h1>Borrar Tareas</h1>
            <FontAwesomeIcon className="arrow" icon={faTrash} />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, cumque. Alias aliquam, culpa illo unde hic at impedit
            iure dolorem quia doloribus neque in quaerat! Hic temporibus
            sapiente similique ipsum.
            <p> </p>
          </div>
          <div className="contenedor-hijo">
            <h1>Completar Tareas</h1>
            <FontAwesomeIcon className="arrow" icon={faCheck} />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, cumque. Alias aliquam, culpa illo unde hic at impedit
            iure dolorem quia doloribus neque in quaerat! Hic temporibus
            sapiente similique ipsum.
            <p> </p>
          </div>
          <div className="contenedor-hijo">
            <h1>Cambiar Tareas</h1>
            <FontAwesomeIcon className="arrow" icon={faPenSquare} />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, cumque. Alias aliquam, culpa illo unde hic at impedit
            iure dolorem quia doloribus neque in quaerat! Hic temporibus
            sapiente similique ipsum.
            <p> </p>
          </div>
        </div>
      </main>
    </>
  )
}

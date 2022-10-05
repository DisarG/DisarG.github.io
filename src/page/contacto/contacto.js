import React from "react"
import "./contacto.css"

export default function Contacto() {
  return (
    <>
      <div className="formulario-contact">
        <h1 className="titulo-form"> Formulario de contacto</h1>
        <form className="form-contact">
          <label className="form-label"> Nombre</label>
          <input type="text" name="name" className="input-form"  placeholder="Nombre" required/>
          <label className="form-label">Email</label>
          <input type="email" name="name" className="input-form" placeholder="Email" required/>
          <label className="form-label">Asunto</label>
          <input type="text" name="name" className="input-form"  placeholder="Asunto" required/>
          <label className="form-label">Mensaje</label>
          <input type="text" name="name" className="input-form" placeholder="Mensaje" required/>
          <input
            type="submit"
            value="Enviar tu contacto"
            className="btn-input"
          />
        </form>
      </div>
    </>
  )
}

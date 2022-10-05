import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <header>
      <h1 className='titulo'>Formulario | Matea</h1>
      <ul>
        <Link className='menu-items' to="/">Inicio</Link>
        <Link className='menu-items' to="/tareas">Tareas</Link>
        <Link className='menu-items' to="/contacto">Contactos</Link>
        <Link className='menu-items' to="/login">Login</Link>
      </ul>
    </header>
  )
}

export default Header
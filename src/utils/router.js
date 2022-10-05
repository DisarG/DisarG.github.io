import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NoLogin from "../page/auth/notas-no-login"
import Header from "../componentes/header/header"
import Login from "../page/auth/login"
import Footer from "../componentes/footer/footer"
import Home from "../page/home/home"
import App from "../App"
import PrivateRoutes from "./PrivateRoutes"
import Contacto from "../page/contacto/contacto"

export default function Rutas() {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/prueba" element={<App />} />
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoutes Logeado={isLogged} />}>
            <Route path="/tareas" element={<App />} />
          </Route>
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login onLogin={setIsLogged} />} />
          <Route path="/noLogin" element={<NoLogin />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

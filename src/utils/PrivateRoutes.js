import React from "react"
import { Outlet, Navigate } from "react-router-dom"

const PrivateRoutes = (props) => {
  let auth = props.Logeado
  return auth ? <Outlet /> : <Navigate to="/NoLogin" />
}

export default PrivateRoutes

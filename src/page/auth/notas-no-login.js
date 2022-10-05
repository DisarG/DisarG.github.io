import React from "react";
import { Link } from "react-router-dom";
import './error404.css'

function NoLogin() {
  return (
    <>
      <div className="content-error">
          <h1 className="text-error"><span className="error-mmm">Mmm...</span> algo no salió bien</h1>
          <p className="text-auth-error">Debes estar autenticado para acceder a esta pagina</p>
          <Link className="btn-error" to="/login">Presiona para autenticarte</Link>
 
      </div>
    </>
  );
}

export default NoLogin;
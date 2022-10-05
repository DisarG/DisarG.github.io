
import { useNavigate } from "react-router"
import "./login.css"

function Login(props) {
  const navigate = useNavigate() //
  const handleSubmit = (e) => {
    e.preventDefault()
    props.onLogin(true)
    return navigate("/tareas")
  }

  return (
    <>
      <div className="container">
    
        <h1 className="title-l">Ingresar</h1>
        <form
          onSubmit={handleSubmit}
          className="formulario"
          name="form"
          id="form"
        >
          <input
            id="input-email"
            type="text"
            name="name"
            className="input-l"
            placeholder="Usuario"
          ></input>
          <input
            id="input-pass"
            type="password"
            name="pass"
            className="input-l"
            placeholder="Contraseña"
          ></input>
          <button className="btn-playlist" type="submit">
            COMENZAR A CREAR TUS NOTAS
          </button>
          <a href="" className="pass">
            ¿Has OLVIDADO LA CONTRASEÑA?
          </a>

          <div className="line-home"></div>
          <a href="" className="acc">
            ¿NO TIENES CUENTA?
          </a>
          <a href="" className="btn-reg">
            REGISTRATE
          </a>
        </form>
      </div>
    </>
  )
}

export default Login

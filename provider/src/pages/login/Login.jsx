import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <span>Proveedores</span>
          <h3 className="loginLogo">Marketb2b</h3>

          <span className="loginDesc">Conecta con clientes</span>
        </div>
        <div className="loginRight">
          <div className="loginTitle">
            <h4>
              <b>INICIA SESIÓN</b>
            </h4>
          </div>
          <div className="loginTitleLink">
            <p>
              Aún no tienes una cuenta?{" "}
              <Link to="/register" style={{ color: "#1775ee" }}>
                Registrate!
              </Link>
            </p>
          </div>
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Correo"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Contraseña"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Iniciar sesion"
              )}
            </button>
            <span className="loginForgot">Olvidaste la contraseña?</span>
          </form>
        </div>
      </div>
    </div>
  );
}

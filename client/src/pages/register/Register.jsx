import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Las contraseñas no coinciden");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">nodox</h3>
          <span className="loginDesc">
            Conecta directamente con proveedores.
          </span>
        </div>

        <div className="loginRight">
          <div className="loginTitle">
            <h4>
              <b>Registrate</b>
            </h4>
          </div>
          <div className="loginTitleLink">
            <p>
              Ya tienes una cuenta?{" "}
              <Link to="/login" style={{ color: "#1775ee" }}>
                Inicia Sesión!
              </Link>
            </p>
          </div>

          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Nombre"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Correo"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Contraseña"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Confirmar contraseña"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />

            <button className="loginButton" type="submit">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

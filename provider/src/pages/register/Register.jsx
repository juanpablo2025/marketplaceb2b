import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Register() {
  const providername = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Las contraseñas no coinciden");
    } else {
      const providername = {
        providername: providername.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", providername);
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
          proveedores
          <h3 className="loginLogo">Marketb2b</h3>
          <span className="loginDesc">
            Conecta con tus proveedores y clientes.
          </span>
        </div>

        <div className="loginRight">
          <div className="loginTitle">
            <h4>
              <b>REGISTRATE</b>
            </h4>
          </div>
          <div className="loginTitleLink">
            <p>
              Ya tienes una cuenta?{" "}
              <Link to="/login" style={{ color: "#1775ee" }}>
                Inicia sesion!
              </Link>
            </p>
          </div>

          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Nombre"
              required
              ref={providername}
              className="loginInput"
            />
            <input
              placeholder="Nombre de empresa"
              required
              /*ref={username}*/
              className="loginInput"
            />
            <input
              placeholder="Direccion"
              required
              /*ref={username}*/
              className="loginInput"
            />
            <input
              placeholder="Telefono"
              required
              /*ref={username}*/
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

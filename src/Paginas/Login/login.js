import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./login.module.css";
import logo from "../../imagens/cogumelo.png";
import Botao from "../../componentes/botao";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  // Função de validação para habilitar o botão de login
  const isFormValid = usuario.trim() !== "" && senha.length > 5;

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", usuario);
    navigate("/home");
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <div className={styles.caixa}>
          <img src={logo} alt="Logo de um cogumelo" className={styles.logo} />
          <h1 className={styles.titulo}>PRATO VERDE</h1>
          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label className={styles.input}>
              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Nome de usuário"
              />
            </label>
            <label className={styles.input}>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Senha"
              />
            </label>
            <div className={styles.botaoContainer}>
              <Botao type="submit" disabled={!isFormValid}>
                Login
              </Botao>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

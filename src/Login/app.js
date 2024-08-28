import styles from "./app.module.css";
import logo from "../imagens/cogumelo.png";
import Botao from "../componentes/botao";
import { useState } from "react";

export default function App() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usuario || !senha) {
      alert("Os campos de usuário e senha precisam der preenchidos");
      return;
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <img
          src={logo}
          alt="Logo de um prato com garfo e faca"
          className={styles.logo}
        />
        <h1 className={styles.titulo}>PRATO VERDE</h1>
        <form onSubmit={handleSubmit} className={styles.formulario}>
          <label className={styles.input}>
            Nome de usuário
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </label>
          <label className={styles.input}>
            Senha
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>
          <div className={styles.botaoContainer}>
            <Botao type="submit">Login</Botao>
          </div>
        </form>
      </div>
    </div>
  );
}

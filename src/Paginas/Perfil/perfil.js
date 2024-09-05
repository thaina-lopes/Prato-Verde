import { IoIosArrowDropleft } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import styles from "../Perfil/perfil.module.css";
import avatar from "../../imagens/profile.png";

export default function Perfil() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");

  const voltarClick = () => {
    navigate("/home");
  };

  const sairClick = () => {
    localStorage.removeItem("user");

    navigate("/");
  };

  useEffect(() => {
    const usuarioArmazenado = localStorage.getItem("user");

    if (usuarioArmazenado) {
      setUsuario(usuarioArmazenado);
    }
  }, []);

  return (
    <div className={styles.perfil}>
      <button className={styles.voltar} onClick={voltarClick}>
        <IoIosArrowDropleft size={24} />
      </button>
      <div className={styles.usuarioContainer}>
        <p className={styles.usuario}>
          <img src={avatar} alt="Ícone de perfil" className={styles.avatar} />
          {usuario}
        </p>
      </div>
      <h3 className={styles.receitasTitulo}>Receitas favoritas</h3>
      <div className={styles.sairContainer}>
        <button className={styles.sair} onClick={sairClick}>
          Sair <RxExit />
        </button>
      </div>
    </div>
  );
}

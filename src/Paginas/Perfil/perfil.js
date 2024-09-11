import { IoIosArrowDropleft, IoIosShareAlt } from "react-icons/io";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import styles from "../Perfil/perfil.module.css";
import avatar from "../../imagens/profile.png";
import { MdFavorite } from "react-icons/md";

export default function Perfil() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [favoritas, setFavoritas] = useState([]);

  const voltarClick = () => {
    navigate("/home");
  };

  const sairClick = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("favoritas");
    navigate("/");
  };

  useEffect(() => {
    const usuarioArmazenado = localStorage.getItem("user");
    if (usuarioArmazenado) {
      setUsuario(usuarioArmazenado);
    }
  }, []);

  useEffect(() => {
    const favoritesIds = JSON.parse(localStorage.getItem("favoritas")) || [];
    const fetchFavorites = async () => {
      const fetchedFavorites = await Promise.all(
        favoritesIds.map(async (id) => {
          const response = await fetch(`http://localhost:3001/receitas/${id}`);
          return response.json();
        })
      );
      setFavoritas(fetchedFavorites);
    };
    fetchFavorites();
  }, []);

  const removerFavorita = (id) => {
    const novasFavoritas = favoritas.filter((receita) => receita.id !== id);
    setFavoritas(novasFavoritas);

    const favoritasIds = novasFavoritas.map((receita) => receita.id);
    localStorage.setItem("favoritas", JSON.stringify(favoritasIds));
  };

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
      <div className={styles.cardContainer}>
        {favoritas.map((receita) => (
          <div key={receita.id} className={styles.receitaFavorita}>
            {/* Renderize os detalhes da receita aqui */}
            <img
              src={receita.link_imagem}
              alt={receita.receita}
              className={styles.imagem}
            />
            <div className={styles.containerTitulo}>
              <h4 className={styles.titulo}>{receita.receita}</h4>
              {/* ... outros detalhes */}
              <div className={styles.icones}>
                <MdFavorite
                  onClick={() => removerFavorita(receita.id)}
                  className={styles.iconeFavorito}
                />
                <IoIosShareAlt />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.sairContainer}>
        <button className={styles.sair} onClick={sairClick}>
          Sair <RxExit />
        </button>
      </div>
    </div>
  );
}

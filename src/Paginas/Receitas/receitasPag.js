import { IoIosArrowDropleft } from "react-icons/io";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "../Receitas/receitasPag.module.css";

export default function ReceitasPag() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [receita, setReceita] = useState(null);
  const [favorito, setFavorito] = useState(false);
  const [linkCopiado, setLinkCopiado] = useState(false);

  const voltarClick = () => {
    navigate("/home");
  };

  useEffect(() => {
    fetch(`http://localhost:3001/receitas/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setReceita(data);
        const favoritos = JSON.parse(localStorage.getItem("favoritas")) || [];
        setFavorito(favoritos.some((favId) => favId === id));
      })
      .catch((error) => console.error("Erro ao buscar a receita:", error));
  }, [id]);

  if (!receita) return <div>Carregando...</div>;

  const ingredientesLista = receita.ingredientes.split(",");

  const handleFavoriteClick = () => {
    setFavorito(!favorito);

    const favoritos = JSON.parse(localStorage.getItem("favoritas")) || [];
    if (favorito) {
      localStorage.setItem(
        "favoritas",
        JSON.stringify(favoritos.filter((favId) => favId !== id))
      );
    } else {
      favoritos.push(id);
      localStorage.setItem("favoritas", JSON.stringify(favoritos));
    }
  };

  const handleShareClick = () => {
    const url = window.location.href; // URL atual da página
    navigator.clipboard
      .writeText(url) // copia a URL
      .then(() => {
        setLinkCopiado(true); // Mostra a mensagem de link copiado
        setTimeout(() => setLinkCopiado(false), 3000); // Esconde a mensagem após 3 seg
      })
      .catch((err) => console.error("Falha ao copiar o link:", err));
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerBotao}>
        <button className={styles.voltar} onClick={voltarClick}>
          <IoIosArrowDropleft size={24} />
        </button>
      </div>
      <img
        src={receita.link_imagem}
        alt={receita.receita}
        className={styles.imagem}
      />
      <div className={styles.iconesContainer}>
        <div className={styles.icones}>
          <button
            onClick={handleFavoriteClick}
            className={styles.botaoFavoritar}
          >
            {favorito ? <MdFavorite /> : <MdFavoriteBorder />}
          </button>
          <button
            onClick={handleShareClick}
            className={styles.botaoCompartilhar}
          >
            <IoIosShareAlt />
          </button>
        </div>
      </div>
      {linkCopiado && <p className={styles.linkCopiado}>Link copiado</p>}{" "}
      {/* Mensagem de link copiado */}
      <h2 className={styles.titulo}>{receita.receita}</h2>
      <h4 className={styles.subTitulo}>Ingredientes:</h4>
      <ul className={styles.descricao}>
        {ingredientesLista.map((ingrediente, index) => (
          <li key={index}>{ingrediente.trim()}</li>
        ))}
      </ul>
      <h4 className={styles.subTitulo}>Modo de Preparo: </h4>
      <p className={styles.descricao}>{receita.modo_preparo}</p>
    </div>
  );
}

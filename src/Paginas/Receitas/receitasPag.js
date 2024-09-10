// ReceitasPag.js
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "../Receitas/receitasPag.module.css";

export default function ReceitasPag() {
  const { id } = useParams();
  const [receita, setReceita] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/receitas/${id}`)
      .then((response) => response.json())
      .then((data) => setReceita(data))
      .catch((error) => console.error("Erro ao buscar a receita:", error));
  }, [id]);

  if (!receita) return <div>Carregando...</div>;

  return (
    <div className={styles.container}>
      <img
        src={receita.link_imagem}
        alt={receita.receita}
        className={styles.imagem}
      />
      <div className={styles.tituloContainer}>
        <h1 className={styles.titulo}>{receita.receita}</h1>
        <div className={styles.icones}>
          <MdFavorite />
          <IoIosShareAlt />
        </div>
      </div>
      <p>
        <strong>Ingredientes:</strong> {receita.ingredientes}
      </p>
      <p>
        <strong>Modo de Preparo:</strong> {receita.modo_preparo}
      </p>
    </div>
  );
}

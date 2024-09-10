// ReceitasPag.js
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

  const ingredientesLista = receita.ingredientes.split(",");

  return (
    <div className={styles.container}>
      <img
        src={receita.link_imagem}
        alt={receita.receita}
        className={styles.imagem}
      />
      <div className={styles.tituloContainer}>
        <h2 className={styles.titulo}>{receita.receita}</h2>
        <div className={styles.icones}>
          <MdFavoriteBorder />
          <IoIosShareAlt />
        </div>
      </div>
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

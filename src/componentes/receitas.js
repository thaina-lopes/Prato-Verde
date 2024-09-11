import React, { useEffect, useState } from "react";

import styles from "./receitas.module.css";
import { Link } from "react-router-dom";

export default function Receitas() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    // Fazendo uma requisição GET para listar as receitas
    fetch("http://localhost:3001/receitas")
      .then((response) => response.json())
      .then((data) => setReceitas(data))
      .catch((error) => console.error("Erro ao buscar receitas:", error));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.receitasContainer}>
        {receitas.map((receita) => (
          <Link
            to={`/receitas/${receita.id}`}
            key={receita.id}
            className={styles.cardLink}
          >
            <div className={styles.card}>
              <img
                src={receita.link_imagem}
                alt={receita.receita}
                className={styles.imagem}
              />
              <h2 className={styles.titulo}>{receita.receita}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

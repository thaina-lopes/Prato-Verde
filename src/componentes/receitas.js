import React, { useEffect, useState } from "react";

import styles from "./receitas.module.css";

export default function Receitas({ imagem, titulo }) {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    // Fazendo uma requisição GET para listar as receitas
    fetch("http://localhost:3001/receitas")
      .then((response) => response.json())
      .then((data) => setReceitas(data))
      .catch((error) => console.error("Erro ao buscar receitas:", error));
  }, []);

  return (
    <div>
      <div className={styles.receitasContainer}>
        {receitas.map((receita) => (
          <div key={receita.id} className={styles.card}>
            <img
              src={receita.link_imagem}
              alt={receita.receita}
              className={styles.imagem}
            />
            <h2 className={styles.titulo}>{receita.receita}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

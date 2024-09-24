import styles from "./categorias.module.css";
import { useState } from "react";

export default function Categorias({ onCategoriaClick }) {
  const categorias = [
    "Acompanhamentos",
    "Doces",
    "Pães",
    "Pratos principais",
    "Sopas",
    "Todas",
  ];

  return (
    <div className={styles.botoesContainer}>
      {categorias.map((categoria, index) => (
        <button
          key={index}
          className={styles.botoes}
          onClick={() => onCategoriaClick(categoria.toLocaleLowerCase())}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}

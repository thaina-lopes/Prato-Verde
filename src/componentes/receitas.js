import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./receitas.module.css";
import Categorias from "./categorias";

export default function Receitas() {
  const [receitas, setReceitas] = useState([]); // Estado para armazenar todas as receitas
  const [tipoSelecionado, setTipoSelecionado] = useState("todas"); // Estado para armazenar a categoria selecionada

  useEffect(() => {
    // Fazendo uma requisição GET para listar as receitas
    fetch("http://localhost:3001/receitas")
      .then((response) => response.json())
      .then((data) => setReceitas(data))
      .catch((error) => console.error("Erro ao buscar receitas:", error));
  }, []);

  // Função para filtrar as receitas com base no tipo selecionado
  const receitasFiltradas =
    tipoSelecionado === "todas"
      ? receitas
      : receitas.filter((receita) => receita.tipo === tipoSelecionado);

  return (
    <div className={styles.container}>
      <Categorias onCategoriaClick={setTipoSelecionado} />
      <div className={styles.receitasContainer}>
        {receitasFiltradas.map((receita) => (
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

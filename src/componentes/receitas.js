import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore"; // Importando métodos do Firebase
import { db } from "../firebase"; // Importa o banco de dados Firestore

import styles from "./receitas.module.css";
import Categorias from "./categorias";

export default function Receitas() {
  const [receitas, setReceitas] = useState([]);
  const [tipoSelecionado, setTipoSelecionado] = useState("todas");

  // Função para buscar receitas do Firestore
  useEffect(() => {
    const fetchReceitas = async () => {
      try {
        const receitasCollection = collection(db, "receitas"); // Define a coleção "receitas"
        const receitasSnapshot = await getDocs(receitasCollection); // Faz a requisição para buscar os documentos
        const receitasList = receitasSnapshot.docs.map((doc) => ({
          id: doc.id, // Usa o ID do documento
          ...doc.data(), // Pega os dados do documento
        }));
        setReceitas(receitasList); // Atualiza o estado com as receitas
      } catch (error) {
        console.error("Erro ao buscar receitas:", error);
      }
    };

    fetchReceitas(); // Chama a função ao carregar o componente
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
                src={receita.imagem}
                alt={receita.titulo}
                className={styles.imagem}
              />
              <h2 className={styles.titulo}>{receita.titulo}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

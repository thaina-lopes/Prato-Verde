import React, { useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

import styles from "./busca.module.css";

export default function BuscarReceita() {
  const [searchTerm, setSearchTerm] = useState("");
  const [receitas, setReceitas] = useState([]);
  const [buscaRealizada, setBuscaRealizada] = useState(false);

  const handleSearch = async () => {
    const results = [];
    setBuscaRealizada(true);

    try {
      // Consulta por nome
      const nameQuery = query(
        collection(db, "receitas"),
        where("titulo", ">=", searchTerm),
        where("titulo", "<=", searchTerm + "\uf8ff")
      );
      const nameSnapshot = await getDocs(nameQuery);
      nameSnapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });

      // Consulta por ingredientes
      const ingredientQuery = query(
        collection(db, "receitas"),
        where("ingredientes", "array-contains", searchTerm.toLowerCase())
      );
      const ingredientSnapshot = await getDocs(ingredientQuery);
      ingredientSnapshot.forEach((doc) => {
        if (!results.some((receita) => receita.id === doc.id)) {
          results.push({ id: doc.id, ...doc.data() });
        }
      });

      setReceitas(results);
    } catch (error) {
      console.error("Erro ao buscar receitas:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Digite o nome da receita ou ingrediente"
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.button}>
        Buscar
      </button>

      <div>
        {buscaRealizada && receitas.length > 0 ? (
          <p>Nenhuma receita encontrada</p>
        ) : (
          receitas.map((receita) => (
            <div key={receita.id}>
              <h3>{receita.titulo}</h3>
              <p>Ingredientes: {receita.ingredientes.join(", ")}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

import { IoIosArrowDropleft } from "react-icons/io";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../Receitas/receitasPag.module.css";
import { doc, getDoc } from "firebase/firestore"; // Importe getDoc e doc do Firestore
import { db } from "../../firebase"; // Ajuste o caminho conforme necessário

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
    const fetchRecipe = async () => {
      const docRef = doc(db, "receitas", id); // Acesse o documento usando o ID
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setReceita(docSnap.data());
        const favoritos = JSON.parse(localStorage.getItem("favoritas")) || [];
        setFavorito(favoritos.some((favId) => favId === id));
      } else {
        console.log("No such document!");
      }
    };

    fetchRecipe().catch((error) =>
      console.error("Erro ao buscar a receita:", error)
    );
  }, [id]);

  if (!receita) return <div>Carregando...</div>;

  const ingredientesLista = receita.ingredientes;

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

  const notify = () =>
    toast.success("Link copiado com sucesso!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
      style: {
        maxWidth: "400px", // Define a largura máxima
        width: "100%", // Define a largura (pode ser uma largura fixa ou percentual)
        height: "20px", // Define a altura
        fontSize: "14px", // Exemplo de ajuste de fonte
        borderRadius: "8px", // Bordas arredondadas
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Sombra
      },
    });

  const handleShareClick = () => {
    const url = window.location.href; // URL atual da página
    navigator.clipboard
      .writeText(url) // copia a URL
      .then(() => {
        notify();
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
        src={receita.imagem}
        alt={receita.titulo}
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
          <ToastContainer />
        </div>
      </div>

      <h2 className={styles.titulo}>{receita.titulo}</h2>
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

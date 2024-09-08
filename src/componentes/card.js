import { MdFavorite } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import styles from "./card.module.css";

export default function Card({ imagem, titulo }) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={titulo} className={styles.imagem} />
      <h2 className={styles.titulo}>{titulo}</h2>
      <div className={styles.icones}>
        <MdFavorite />
        <IoIosShareAlt />
      </div>
    </div>
  );
}

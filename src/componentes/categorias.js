import styles from "./categorias.module.css";

export default function Categorias() {
  const categorias = ["Bolos", "Café da manhã", "Lanches", "Massas", "Sopas"];

  return (
    <div className={styles.botoesContainer}>
      {categorias.map((categoria, index) => (
        <button key={index} className={styles.botoes}>
          {categoria}
        </button>
      ))}
    </div>
  );
}

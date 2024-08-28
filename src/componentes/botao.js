import styles from "./botao.module.css";

export default function Botao({ children }) {
  return <button className={styles.botao}>{children}</button>;
}

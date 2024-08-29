import styles from "./botao.module.css";

export default function Botao({ children, type, disabled }) {
  return (
    <button type={type} disabled={disabled} className={styles.botao}>
      {children}
    </button>
  );
}

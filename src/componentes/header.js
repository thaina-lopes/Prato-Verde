import { RxAvatar } from "react-icons/rx";
import logo from "../imagens/cogumelo.png";
import styles from "../componentes/header.module.css";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.menuContainer}>
        <div className={styles.menuItem}>
          <a href="/perfil" aria-label="Ir para o perfil">
            <RxAvatar size={30} aria-hidden="true" />
          </a>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.caixa}>
            <img src={logo} alt="Logo de um cogumelo" className={styles.logo} />
            <a>PRATO VERDE</a>
          </div>
        </div>
        <div className={styles.menuItem}></div>
      </div>
    </header>
  );
}

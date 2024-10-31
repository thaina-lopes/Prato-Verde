import { RxAvatar } from "react-icons/rx";

import styles from "../componentes/header.module.css";
import BuscarReceita from "./busca";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.menuContainer}>
        <div className={styles.menuItem}>
          <a href="/perfil" aria-label="Ir para o perfil">
            <RxAvatar size={22} aria-hidden="true" />
          </a>
        </div>
        <div className={styles.menuItem}>
          <a>Prato Verde</a>
        </div>
        <div className={styles.menuItem}></div>
      </nav>
    </header>
  );
}

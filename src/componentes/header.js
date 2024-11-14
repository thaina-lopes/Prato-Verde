import { RxAvatar } from "react-icons/rx";

import styles from "../componentes/header.module.css";
import BuscarReceita from "./busca";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.menuContainer}>
        <div className={styles.menuItem}>
          <a href="/perfil" aria-label="Ir para o perfil">
            <RxAvatar
              size={28}
              aria-hidden="true"
              style={{
                filter: "drop-shadow(2px 2px 5px rgba(255, 255, 255, 1))",
              }}
            />
          </a>
        </div>
        <div className={styles.menuItem}>
          <a>PRATO VERDE</a>
        </div>
        <div className={styles.menuItem}></div>
      </nav>
    </header>
  );
}

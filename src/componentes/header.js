import { RxAvatar } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import React, { useState } from "react";

import styles from "../componentes/header.module.css";

export default function Header() {
  const [expandido, setExpandido] = useState(false);

  const aoClicar = () => {
    setExpandido(!expandido);
  };

  return (
    <header className={styles.headerContainer}>
      <nav className={styles.menuContainer}>
        <div className={styles.menuItem}>
          <a href="/perfil" aria-label="Ir para o perfil">
            <RxAvatar aria-hidden="true" />
          </a>
        </div>
        <div className={styles.menuItem}>
          <a href="/">Prato Verde</a>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.containerBusca}>
            <button
              onClick={aoClicar}
              className={styles.iconeBusca}
              aria-label="Buscar"
            >
              <IoIosSearch aria-hidden="true" />
            </button>
            {expandido && (
              <input
                type="text"
                className={styles.inputBusca}
                placeholder="Buscar receitas..."
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

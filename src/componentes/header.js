import styles from "../componentes/header.module.css";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/perfil">Perfil</a>
          </li>
          <li>
            <a href="/">Prato Verde</a>
          </li>
          <li>
            <a href="/busca">Busca</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

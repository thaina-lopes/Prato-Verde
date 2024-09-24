import Header from "../../componentes/header";
import Categorias from "../../componentes/categorias";
import styles from "../Home/home.module.css";
import Receitas from "../../componentes/receitas";

export default function Home() {
  return (
    <div>
      <Header />
      <Receitas />
    </div>
  );
}

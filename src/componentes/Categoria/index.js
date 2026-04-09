import Styles from "./Categoria.module.css";
import Card from "../Card";
import { Link } from "react-router-dom";

export const categorias = [
  {
    tipo: "poesias",
  },
  {
    tipo: "livros",
  },
];

function Categoria({ titulo, subtitulo, dados, tipo }) {
  const filtrados = dados.filter((item) => item.categoria === tipo);

  return (
    <section className={Styles.categoria}>
      <h2>{titulo}</h2>
      <p className={Styles.sub}>{subtitulo}</p>

      <div className={Styles.cards_container}>
        {filtrados.map((item) => (
          <Card
            key={item.id}
            imagem={item.imagem}
            titulo={item.titulo}
            descricao={item.descricao}
          />
        ))}
      </div>
        
      <Link to={`/${tipo}`} className={Styles.btn_ver_mais}>
      {filtrados[0]?.botao || "Ver mais"}
    </Link>
      
    </section>
  );
}

export default Categoria;
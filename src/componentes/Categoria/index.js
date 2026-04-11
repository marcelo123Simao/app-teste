
import Styles from "./Categoria.module.css";
import Card from "../Card";
import { Link } from "react-router-dom";

export const categorias = [
  {
    tipo: "poesias",
    titulo: "Minhas Poesias",
    subtitulo: "Versos escritos com emoção, amor e sentimento",
  },
  {
    tipo: "livros",
    titulo: "Meus Livros",
    subtitulo: "Obras que carregam histórias, reflexões e poesia",
  },
];

function Categoria({ titulo, subtitulo, dados, tipo }) {
  const filtrados = dados.filter((item) => item.categoria === tipo);

  return (
    <section className={Styles.categoria}>
      <div className={Styles.cabecalhoCategoria}>
        <div className={Styles.linha}></div>

        <div className={Styles.textosCabecalho}>
          <h2>{titulo}</h2>
          <p className={Styles.sub}>{subtitulo}</p>
        </div>

        <div className={Styles.linha}></div>
      </div>

      <div className={Styles.cardsContainer}>
        {filtrados.map((item) => (
          <Card
            key={item.id}
            imagem={item.imagem}
            titulo={item.titulo}
            descricao={item.descricao}
            tipo={tipo === "livros" ? "livro" : "poesia"}
            botaoTexto={item.botaoCard}
            onClick={() => console.log(`Abrir ${item.titulo}`)}
          />
        ))}
      </div>

      <div className={Styles.areaBotao}>
        <Link to={`/${tipo}`} className={Styles.btnVerMais}>
          {filtrados[0]?.botao ||
            (tipo === "livros"
              ? "Conheça os Livros"
              : "Ver Mais Poesias")}
        </Link>
      </div>
    </section>
  );
}

export default Categoria;



import Styles from "./Card.module.css";

function Card({
  imagem,
  titulo,
  descricao,
  botaoTexto,
  onClick,
  tipo = "poesia",
}) {
  return (
    <article className={Styles.cardCategoria}>
      <div className={Styles.cardImagemWrapper}>
        <img
          src={imagem}
          alt={titulo}
          className={Styles.cardCategoriaImagem}
          loading="lazy"
        />

        <div className={Styles.cardCategoriaOverlay}></div>
      </div>

      <div className={Styles.cardCategoriaConteudo}>
        <span className={Styles.cardTipo}>
          {tipo === "livro" ? "Livro" : "Poesia"}
        </span>

        <h3 className={Styles.cardCategoriaTitulo}>{titulo}</h3>

        <p className={Styles.cardCategoriaDescricao}>{descricao}</p>

        {botaoTexto && (
          <button className={Styles.cardBotao} onClick={onClick}>
            {botaoTexto}
          </button>
        )}
      </div>
    </article>
  );
}

export default Card;

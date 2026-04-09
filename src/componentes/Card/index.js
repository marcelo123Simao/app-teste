import Styles from "./Card.module.css";

function Card({ imagem, titulo, descricao }) {
  return (
    <div className={Styles.card_categoria}>
      <img
        src={imagem}
        alt={titulo}
        className={Styles.card_categoria_imagem}
      />

      <div className={Styles.card_categoria_overlay}></div>

      <div className={Styles.card_categoria_conteudo}>
        <h3 className={Styles.card_categoria_titulo}>{titulo}</h3>
        <p className={Styles.card_categoria_descricao}>{descricao}</p>
      </div>
    </div>
  );
}

export default Card;
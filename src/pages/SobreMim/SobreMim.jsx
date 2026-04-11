import Cabecario from "../../componentes/Cabecario";
import Rodape from "../../componentes/Rodape";
import Styles from "./SobreMim.module.css";

function SobreMim() {
  return (
    <>
      <Cabecario />

      <div className="container">
        <div className={Styles.sobreWrapper}>
          <div className={Styles.imagemArea}>
            <div className={Styles.imagemBox}>
              <img src="/imagem/logo-sobre.jpg" alt="Sobre mim" />
            </div>
          </div>

          <div className={Styles.conteudoArea}>
            <h2 className={Styles.titulo}>Sobre Mim</h2>

            <p className={Styles.texto}>
              Sou um poeta apaixonado pela arte das palavras, onde transformo
              sentimentos em versos e memórias em poesia. A escrita é o meu
              refúgio e a forma mais pura de expressar a alma.
            </p>

            <p className={Styles.texto}>
              Através dos meus livros e poesias, busco tocar corações, despertar
              emoções e eternizar momentos simples da vida em palavras profundas.
            </p>

            <h5 className={Styles.subtitulo}>Minhas Paixões</h5>

            <div className={Styles.paixoes}>
              <div className={Styles.cardPaixao}>❤️ Amor</div>
              <div className={Styles.cardPaixao}>🌙 Solidão e a reflexão</div>
              <div className={Styles.cardPaixao}>🌿 Natureza</div>
              <div className={Styles.cardPaixao}>✍️ Inspiração</div>
            </div>

            <div className={Styles.marqueeBox}>
              <marquee behavior="scroll" direction="left" scrollamount="6">
                📞 Contacto: +244 951 456 711 &nbsp;&nbsp; | &nbsp;&nbsp;
                📧 Email: simaowork123@gmail.com &nbsp;&nbsp; | &nbsp;&nbsp;
                📍 Luanda, Angola &nbsp;&nbsp; | &nbsp;&nbsp;
                ✍️ Poeta & Escritor Independente
              </marquee>
            </div>
          </div>
        </div>
      </div>

      <Rodape />
    </>
  );
}

export default SobreMim;
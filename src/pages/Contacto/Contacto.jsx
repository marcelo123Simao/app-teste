import Styles from "./Contacto.module.css";
import Cabecario from "../../componentes/Cabecario";
import Rodape from "../../componentes/Rodape";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contacto() {
  return (
    <>
      <Cabecario />

      <main className={Styles.contacto}>

        <div className={Styles.overlay}></div>

        <div className="container">
          <div className={Styles.wrapper}>

            {/* LADO ESQUERDO */}
            <div className={Styles.infoArea}>
              <span className={Styles.subtitulo}>Bem-vindo</span>

              <h1>Marcelo Simão_O"Poeta"</h1>

              <p className={Styles.texto}>
                Seja bem-vindo ao meu universo de versos, sentimentos e emoções.
                Aqui cada palavra carrega uma história e cada poema uma alma.
              </p>

              <div className={Styles.cardsInfo}>

                <div className={Styles.cardInfo}>
                  <FaEnvelope />
                  <div>
                    <h3>Email</h3>
                    <p>marcelosimaoopoeta@gmail.com</p>
                  </div>
                </div>

                <div className={Styles.cardInfo}>
                  <FaPhoneAlt />
                  <div>
                    <h3>Telefone</h3>
                    <p>(+244) 928 607 944 / 951 456 711</p>
                  </div>
                </div>

                <div className={Styles.cardInfo}>
                  <FaMapMarkerAlt />
                  <div>
                    <h3>Localização</h3>
                    <p>Luanda, Angola</p>
                  </div>
                </div>

              </div>
            </div>

            {/* LADO DIREITO */}
            <div className={Styles.formArea}>
              <div className={Styles.formCard}>

                <span className={Styles.subtitulo}>Envie uma mensagem</span>
                <h2>Fale Comigo</h2>

                <form>
                  <input type="text" placeholder="Seu nome" />
                  <input type="tel" placeholder="Seu telefone" />
                  <textarea rows="6" placeholder="Sua mensagem"></textarea>

                  <button type="submit">
                    Enviar Mensagem
                  </button>
                </form>

              </div>
            </div>

          </div>
        </div>
      </main>

      <Rodape />
    </>
  );
}

export default Contacto;
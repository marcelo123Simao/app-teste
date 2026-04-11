
import Styles from "./Rodape.module.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

function Rodape() {
  return (
    <footer className={Styles.rodape}>
      <div className={Styles.overlay}></div>

      <div className={Styles.rodapeContainer}>
        <div className={Styles.rodapeColuna}>
          <span className={Styles.subtitulo}>Contacto</span>
          <h3>Vamos Conversar</h3>

          <p className={Styles.texto}>
            Entre em contacto comigo para partilhar ideias, poesia,
            colaborações ou convites para eventos.
          </p>

          <div className={Styles.infoItem}>
            <FaEnvelope />
            <span>marcelosimaopoeta@email.com</span>
          </div>

          <div className={Styles.infoItem}>
            <FaPhoneAlt />
            <span>(+244) 999 999 999</span>
          </div>

          <div className={Styles.infoItem}>
            <FaMapMarkerAlt />
            <span>Luanda, Angola</span>
          </div>
        </div>

        <div className={Styles.rodapeCentro}>
          <h2>Marcelo Simão</h2>
          <p className={Styles.frase}>
            “A poesia é a alma que fala,
            <br />
            e o coração que escuta.”
          </p>

          <div className={Styles.redesSociais}>
  <a href="https://www.instagram.com/marcelosimaoopoeta?igsh=czkwNzZxODBxNTJz" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>

  <a href="https://www.facebook.com/profile.php?id=61551675328271" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>

  <a href="https://www.youtube.com/@simaomarcelo." target="_blank" rel="noopener noreferrer">
    <FaYoutube />
  </a>
</div>
        </div>
      </div>

      <div className={Styles.rodapeBottom}>
        <p>
          © 2026 TecanBuild- Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Rodape;


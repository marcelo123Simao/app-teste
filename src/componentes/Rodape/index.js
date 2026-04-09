import Styles from "./Rodape.module.css";
function Rodape() {
  return (
    <footer className={Styles.rodape}>
      <div className={Styles.rodape_container}>
        
        <div className={Styles.rodape_contato}>
          <h3>CONTATO</h3>
          <p>Vamos conversar? Entre em contato comigo!</p>

          <p>📧 email: <span>ricardomelo@email.com</span></p>
          <p>📞 Telefone: <span>(+999) 9999-9999</span></p>
          <p>📍 São Paulo, Brasil</p>
        </div>

        <div className={Styles.rodape_frase}>
          <p>
            “ A poesia é a alma que fala,<br />
            o coração que escuta. ”
          </p>
        </div>

      </div>
    </footer>
  );
}
export default Rodape;